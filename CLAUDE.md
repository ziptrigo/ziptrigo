# ZipTrigo landing
This repo is a Nuxt 4 + Tailwind CSS v4 landing page. Static output (SSG), served by Nginx in Docker.

## Tailwind v4 notes
There is **no `tailwind.config.js`**. All theme tokens are declared in the `@theme` block of
`assets/css/tailwind.css` and are exported as CSS variables:

- Colors are namespaced: `--color-ziptrigo-sage`, `--color-ziptrigo-mist`, `--color-ziptrigo-stone`,
  `--color-ziptrigo-moss`, `--color-ziptrigo-forest`, `--color-ziptrigo-ink`.
- Animations: `--animate-aurora`. Shadows: `--shadow-soft`.

When referencing a token in raw CSS or a Tailwind arbitrary value, use the **full** variable name
including the `--color-` prefix. An unresolvable `var()` is invalid at computed-value time, so the
whole declaration falls back to its initial value — for `background-image` that means `none`, and
the effect disappears with no console error.

## Background animation (Aurora)
A subtle animated aurora background implemented as a wrapper component:
- `components/ui/AuroraBackground.vue`

Enabled by default, toggled via the footer button, persisted in `localStorage`.

### Toggle + persistence
- UI: footer toggle in `components/FooterSection.vue`
- State + persistence: `composables/useAuroraPreference.ts`
- Storage key: `ziptrigo:aurora-enabled` (`'1'` enabled, `'0'` disabled)

### Performance notes
When disabled, the aurora layer is not rendered (`v-if`) and three static blurred blobs are shown
instead, which avoids the animation + blend work.

### Settings you can tweak
1. Animation speed — `assets/css/tailwind.css`: `--animate-aurora` (e.g. `60s` → `90s` slower).
2. Intensity — `components/ui/AuroraBackground.vue`: `opacity-30`, `blur-[14px]`, `saturate-125`,
   `after:mix-blend-multiply`.
3. Palette — the `--color-ziptrigo-*` variables in `assets/css/tailwind.css`.
4. Radial mask — `AuroraBackground.vue` prop `showRadialGradient`.

## Motion and accessibility
Animations are pure CSS (no JS animation library). Every animation must stay disabled under
`prefers-reduced-motion: reduce`:
- The aurora uses `motion-reduce:after:animate-none`.
- The hero `.rise-in` classes and `scroll-behavior: smooth` are declared *inside*
  `@media (prefers-reduced-motion: no-preference)`, so the default state is fully visible and
  content is never stuck at `opacity: 0` if the animation never applies.

## SEO
Head tags live in `nuxt.config.ts`. Absolute URLs derive from `siteUrl`, overridable at build time
with `NUXT_PUBLIC_SITE_URL`.
