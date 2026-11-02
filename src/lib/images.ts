import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

/** Resolve an asset by path relative to src/assets, without extension. */
export function img(path: string): ImageMetadata {
  const hit = Object.entries(all).find(([key]) => key.replace(/\.(jpe?g|png|webp)$/, '') === `/src/assets/${path}`);
  if (!hit) throw new Error(`Image not found: src/assets/${path}`);
  return hit[1].default;
}
