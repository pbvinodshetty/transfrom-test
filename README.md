# Transform Life Programs — landing page

This is a single-page website for Transform Life Programs®, a healing and counselling centre in Bengaluru. It's built with [Astro](https://astro.build) and produces a static site that can be hosted anywhere.

## Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the built site
npm run check     # type-check
```

## Page sections

The page lives in `src/pages/index.astro`. It opens on a black, glowing "tech" hero and moves into clean white sections with deep-navy accents. Sections sit one after another — nothing overlaps. The footer (`src/components/Footer.astro`) is unchanged.

| Section | Anchor | What it does |
|---|---|---|
| Navbar | — | Dark bar (`src/components/Header.astro`): logo, glass pill of links with the current one lit, Call and Book now buttons; dropdown menu on mobile |
| Hero | `#top` | Black, with two glowing curved light sweeps that draw in; a glass emblem of the petal mark with circuit traces and travelling light; "Heal Gently, Live Fully"; four theme tiles that open WhatsApp about that theme |
| Steps | — | "Every Journey Begins Gently": three glowing step boxes joined by lines with a moving light |
| About | `#about` | Dr. Deepa's portrait (the only photo of her) beside her story, qualifications and the team avatars |
| Footer | `#contact` | Unchanged |

- **There is no booking form on the page.** "Book now", the practices, "Book a consultation" and each program row open WhatsApp (appointments number) with a message already written, naming the program or practice where there is one. The footer's "Call to book" dials the appointments number.

## Where the content lives

| What | Where |
|---|---|
| Business details (phones, address, hours, menu) | `src/data/site.ts` |
| Programs and themes | `src/data/programs.ts` |
| Crystals and prices | `src/data/products.ts` |
| Founder and awards | `src/data/people.ts` |
| Design tokens and palette | `src/styles/global.css` |
| Images (optimised at build time) | `src/assets/` |

## Images

- `src/assets/stock/` holds atmospheric photos from Wikimedia Commons, all licensed for commercial use: CC0 or public domain, or CC BY / CC BY-SA with credit. Their credits are in `src/assets/stock/CREDITS.json` and appear automatically under "Photo credits" in the footer. Keep that credit line if you keep the photos.
- Photos of Dr. Deepa, the team and the centre are the business's own. They were lightly sharpened and colour-balanced from the originals. For the best quality, replace them with original camera files, not WhatsApp copies.
- Astro converts every image to modern formats at several sizes at build time.

## Booking form (not currently used)

The form component is kept in `src/components/EnquiryForm.astro` in case you want it back. If `PUBLIC_FORM_ENDPOINT` is set (see `.env.example`), it POSTs JSON to that endpoint, for example Formspree, Web3Forms or your own API; otherwise it opens WhatsApp with the visitor's details filled in.

## Colour palette

| Role | Colour |
|---|---|
| Signature | Periwinkle `#B4BAEA` (the centre's walls) |
| Deep accent | Night `#1C1F4A` |
| Links | Indigo `#3F46B8` |
| Signature modalities | `tone-signature`, periwinkle |
| Body & natural healing | `tone-body`, sage |
| Abundance & self | `tone-self`, marigold |
| Soul & spirit | `tone-soul`, rose |

## ⚠ Security: the current live site is compromised

The existing WordPress site serves Japanese spam pages, for example at `/contact/`, and lists around 780,000 injected spam URLs in its sitemap. Before or during launch:

1. Take a backup, then remove the WordPress install or deploy this site in its place.
2. Rotate all hosting, FTP, database and admin passwords.
3. In Google Search Console, remove the spam URLs and submit the new `sitemap-index.xml`.
