// Site-wide UI behaviour: mobile navigation and accordion.
export {};

/* ---------- Mobile navigation ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const toggleLabel = toggle?.querySelector('[data-menu-label]');
const mobileNav = document.querySelector<HTMLElement>('[data-mobile-nav]');

function toggleMobile(open: boolean) {
  if (!toggle || !mobileNav) return;
  mobileNav.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  header?.classList.toggle('menu-open', open);
  if (toggleLabel) toggleLabel.textContent = open ? 'Close' : 'Menu';
}

toggle?.addEventListener('click', () => toggleMobile(mobileNav?.hidden ?? true));
document.querySelectorAll('[data-close-menu]').forEach((a) => a.addEventListener('click', () => toggleMobile(false)));
document.addEventListener('click', (e) => {
  if (mobileNav && !mobileNav.hidden && header && !header.contains(e.target as Node)) toggleMobile(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNav && !mobileNav.hidden) {
    toggleMobile(false);
    toggle?.focus();
  }
});

/* ---------- Accordion: only one item open at a time ---------- */
document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((group) => {
  const items = Array.from(group.querySelectorAll<HTMLDetailsElement>('details'));
  items.forEach((d) =>
    d.addEventListener('toggle', () => {
      if (d.open) items.forEach((other) => other !== d && (other.open = false));
    }),
  );
});
