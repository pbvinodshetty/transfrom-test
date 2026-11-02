// Lightweight motion layer. Everything is progressive: without JS or with
// reduced motion, content is simply visible.
export {};

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header state ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScrollHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
onScrollHeader();
window.addEventListener('scroll', onScrollHeader, { passive: true });

/* ---------- Auto-animate standard blocks ---------- */
document.querySelectorAll<HTMLElement>('main .section-head, main [data-stagger] > *, main .auto-animate > *').forEach((el) => {
  if (!el.hasAttribute('data-animate')) el.setAttribute('data-animate', '');
});

document.querySelectorAll<HTMLElement>('[data-stagger], .auto-animate').forEach((group) => {
  Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i % 8)));
});

/* ---------- Word splitting ---------- */
function splitWords(el: HTMLElement, wordClass: string) {
  const text = (el.textContent ?? '').trim();
  el.setAttribute('aria-label', text);
  el.innerHTML = text
    .split(/\s+/)
    .map((w, i) => `<span class="${wordClass}" aria-hidden="true"><span style="--wi:${i}">${w}</span></span>`)
    .join(' ');
}

// Headlines that rise or focus in once (data-split / data-split="blur")
document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  splitWords(el, 'w');
  el.classList.add('split');
  if (el.dataset.split === 'blur') el.classList.add('split-blur');
});

// Headings that light up word by word as you scroll (data-ink)
const inks = Array.from(document.querySelectorAll<HTMLElement>('[data-ink]'));
inks.forEach((el) => {
  splitWords(el, 'ink-w');
  el.classList.add('ink');
});

/* ---------- Reveal on scroll ---------- */
const targets = document.querySelectorAll<HTMLElement>('[data-animate], .split, [data-count-to], [data-progress], [data-bars]');
if (reduced || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('in-view'));
} else {
  // Fully clipped elements report zero visible area, so for the "clip"
  // reveal we watch the parent and reveal the child when the parent shows.
  const proxies = new Map<Element, HTMLElement[]>();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const revealed = proxies.get(el) ?? [el];
        revealed.forEach((t) => {
          t.classList.add('in-view');
          if (t.dataset.countTo) countUp(t);
        });
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => {
    const watch = el.dataset.animate === 'clip' && el.parentElement ? el.parentElement : el;
    if (watch !== el) proxies.set(watch, [...(proxies.get(watch) ?? []), el]);
    io.observe(watch);
  });
}

/* ---------- Count-up numbers ---------- */
function countUp(el: HTMLElement) {
  const end = Number(el.dataset.countTo);
  const duration = 1600;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(end * (1 - Math.pow(1 - t, 4))));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
if (reduced) document.querySelectorAll<HTMLElement>('[data-count-to]').forEach((el) => (el.textContent = el.dataset.countTo!));

/* ---------- Scroll-linked effects ---------- */
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const progress = Array.from(document.querySelectorAll<HTMLElement>('[data-progress]'));
const expanders = Array.from(document.querySelectorAll<HTMLElement>('[data-expand]'));
const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);

if (reduced) {
  progress.forEach((el) => el.style.setProperty('--p', '1'));
  expanders.forEach((el) => el.style.setProperty('--e', '1'));
  inks.forEach((el) => el.querySelectorAll('.ink-w').forEach((w) => w.classList.add('lit')));
} else {
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;

    parallax.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const speed = Number(el.dataset.parallax) || 0.1;
      el.style.transform = `translate3d(0, ${((r.top + r.height / 2 - vh / 2) * -speed).toFixed(1)}px, 0)`;
    });

    progress.forEach((el) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--p', clamp01((vh * 0.75 - r.top) / (r.height || 1)).toFixed(3));
    });

    // Image widens from an inset card to full bleed as it rises into view
    expanders.forEach((el) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--e', clamp01((vh - r.top) / (vh * 0.75)).toFixed(3));
    });

    // Words light up from 90% to 40% of the viewport height
    inks.forEach((el) => {
      const r = el.getBoundingClientRect();
      const p = clamp01((vh * 0.9 - r.top) / (vh * 0.5));
      const words = el.querySelectorAll('.ink-w');
      const lit = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i < lit));
    });

    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ---------- Drag-to-scroll carousels ---------- */
document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((track) => {
  const prev = document.querySelector<HTMLButtonElement>(`[data-carousel-prev="${track.id}"]`);
  const next = document.querySelector<HTMLButtonElement>(`[data-carousel-next="${track.id}"]`);
  const by = () => Math.max(track.clientWidth * 0.8, 280);
  prev?.addEventListener('click', () => track.scrollBy({ left: -by(), behavior: reduced ? 'auto' : 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: by(), behavior: reduced ? 'auto' : 'smooth' }));

  let down = false;
  let startX = 0;
  let startLeft = 0;
  let moved = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    down = true;
    moved = false;
    startX = e.clientX;
    startLeft = track.scrollLeft;
    track.classList.add('dragging');
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    down = false;
    track.classList.remove('dragging');
  });
  track.addEventListener('click', (e) => moved && e.preventDefault(), true);
});
