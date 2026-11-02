// Enquiry & booking forms. Posts JSON to PUBLIC_FORM_ENDPOINT when configured;
// otherwise composes a WhatsApp message so no enquiry is ever lost.

const PHONE = /^[+]?[\d\s()-]{8,20}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const labels: Record<string, string> = {
  consultation: 'Personal consultation',
  program: 'Program or workshop',
  crystals: 'Crystals',
  other: 'Other enquiry',
};

function setError(form: HTMLFormElement, name: string, message: string) {
  const out = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
  const field = form.elements.namedItem(name) as HTMLInputElement | null;
  if (out) out.textContent = message;
  if (field && 'setAttribute' in field) {
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
  }
}

function validate(form: HTMLFormElement, data: FormData): boolean {
  let ok = true;
  const name = String(data.get('name') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const date = String(data.get('date') ?? '');

  setError(form, 'name', name.length >= 2 ? '' : 'Please enter your name.');
  setError(form, 'phone', PHONE.test(phone) ? '' : 'Please enter a valid phone number.');
  setError(form, 'email', !email || EMAIL.test(email) ? '' : 'Please check your email address.');
  setError(form, 'consent', data.get('consent') ? '' : 'Please agree so we can contact you.');

  let dateError = '';
  if (date) {
    const chosen = new Date(date + 'T12:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) dateError = 'Please choose a future date.';
  }
  setError(form, 'date', dateError);

  form.querySelectorAll('[aria-invalid="true"]').forEach(() => (ok = false));
  if (!data.get('consent')) ok = false;
  return ok;
}

function compose(data: FormData, form: HTMLFormElement): string {
  const programSelect = form.querySelector<HTMLSelectElement>('select[name="program"]');
  const programName = programSelect?.selectedOptions[0]?.textContent ?? '';
  const type = String(data.get('type') ?? '');
  const lines = [
    `Hello Transform Life Programs, I would like to ${type ? 'book' : 'get in touch'}.\n`,
    type && `• Request: ${labels[type] ?? type}`,
    type === 'program' && `• Program: ${programName}`,
    data.get('topic') && `• Topic: ${data.get('topic')}`,
    `• Name: ${data.get('name')}`,
    `• Phone: ${data.get('phone')}`,
    data.get('email') && `• Email: ${data.get('email')}`,
    data.get('mode') && `• Preference: ${data.get('mode')}`,
    data.get('date') && `• Preferred date: ${new Date(String(data.get('date')) + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}`,
    data.get('time') && `• Preferred time: ${data.get('time')}`,
    data.get('message') && `\n${String(data.get('message')).trim()}`,
  ];
  return lines.filter(Boolean).join('\n');
}

function init(form: HTMLFormElement) {
  const endpoint = form.dataset.endpoint ?? '';
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const success = form.querySelector<HTMLElement>('[data-form-success]')!;
  const body = form.querySelector<HTMLElement>('.form-body')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;

  // Show the program picker only for program enquiries.
  const programField = form.querySelector<HTMLElement>('[data-show-for="program"]');
  const syncType = () => {
    const type = (form.querySelector('input[name="type"]:checked') as HTMLInputElement | null)?.value;
    if (programField) programField.hidden = type !== 'program';
  };
  form.querySelectorAll('input[name="type"]').forEach((r) => r.addEventListener('change', syncType));

  // Pre-select from ?program=slug or ?type=crystals.
  const params = new URLSearchParams(location.search);
  const slug = params.get('program');
  const typeParam = params.get('type');
  if (slug) {
    const select = form.querySelector<HTMLSelectElement>('select[name="program"]');
    if (select && [...select.options].some((o) => o.value === slug)) select.value = slug;
    const radio = form.querySelector<HTMLInputElement>('input[name="type"][value="program"]');
    if (radio) radio.checked = true;
  } else if (typeParam) {
    const radio = form.querySelector<HTMLInputElement>(`input[name="type"][value="${CSS.escape(typeParam)}"]`);
    if (radio) radio.checked = true;
  }
  syncType();

  form.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    if (target.getAttribute('aria-invalid') === 'true') setError(form, target.name, '');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    const data = new FormData(form);

    if (data.get('website')) return; // honeypot
    if (!validate(form, data)) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    const type = String(data.get('type') ?? '');
    const number = type === 'crystals' ? form.dataset.whatsappCrystals! : form.dataset.whatsapp!;
    const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(compose(data, form))}`;
    form.querySelector<HTMLAnchorElement>('[data-success-wa]')!.href = waUrl;

    if (endpoint) {
      button.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending…';
      try {
        const payload = Object.fromEntries([...data.entries()].filter(([k]) => k !== 'website'));
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...payload, source: location.pathname }),
        });
        if (!res.ok) throw new Error(String(res.status));
      } catch {
        button.disabled = false;
        if (submitLabel) submitLabel.textContent = 'Try again';
        status.innerHTML = '';
        status.append('Sorry, we couldn’t send that. ');
        const a = document.createElement('a');
        a.href = waUrl;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = 'Send it on WhatsApp instead';
        status.append(a);
        return;
      }
    } else {
      window.open(waUrl, '_blank', 'noopener');
      const text = form.querySelector('[data-success-text]');
      if (text) text.textContent = 'Your request is ready in WhatsApp — press send and our team will confirm with you shortly.';
    }

    body.hidden = true;
    success.hidden = false;
    success.focus();
    form.reset();
  });
}

document.querySelectorAll<HTMLFormElement>('[data-enquiry-form]').forEach(init);
