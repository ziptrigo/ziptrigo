# ZipTrigo Landing (Nuxt 4 + Tailwind v4)

Single-page marketing landing page for ZipTrigo (QR codes, short links, and email forwarding).

## Requirements

- Node.js 22+ (Nuxt 4/Vite build uses `crypto.hash`, which is not available in Node 21)

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build static site (SSG)

This project is configured for static output.

```bash
npm run generate
```

Static files will be generated under `.output/public`.

Absolute URLs in the canonical and Open Graph tags default to `https://ziptrigo.com`.
Override for other environments:

```bash
NUXT_PUBLIC_SITE_URL=https://staging.example.com npm run generate
```

## Docker (static via Nginx)

Build:

```bash
docker build -t ziptrigo-landing .
```

Run (container listens on port 8005):

```bash
docker run --rm -p 8005:8005 ziptrigo-landing
```

Open `http://localhost:8005`. The image exposes `/healthz` and declares a `HEALTHCHECK`
against it. Hashed assets under `/_nuxt/` are served with a one-year immutable cache.

## Background animation (Aurora)

This landing page includes a subtle animated aurora background.

- Wrapper component: `components/ui/AuroraBackground.vue`
- Toggle button: in the footer (left of the copyright)
- Persistence: stored in `localStorage` under `ziptrigo:aurora-enabled` (`'1'` enabled, `'0'` disabled)

### Tuning the effect

All theme tokens live in the `@theme` block of `assets/css/tailwind.css`. Tailwind v4
exports them as CSS variables, colors under the `--color-*` namespace.

1. Animation speed
- `assets/css/tailwind.css`: `--animate-aurora` (default: `aurora 60s linear infinite`)

2. Intensity
- `components/ui/AuroraBackground.vue`:
  - `opacity-30` (lower = more subtle)
  - `blur-[14px]` (higher = softer)
  - `saturate-125` (lower = less vivid)
  - `after:mix-blend-multiply` (blend mode affects contrast)

3. Palette
- `assets/css/tailwind.css`: the `--color-ziptrigo-*` variables.
- The aurora gradients reference these by their full name, e.g. `var(--color-ziptrigo-sage)`.
  The `--color-` prefix is required — dropping it silently breaks the gradient, since an
  unresolvable `var()` makes `background-image` compute to `none`.

## Notes

- The logo is served from `public/ziptrigo_logo.webp` (in-page) and
  `public/ziptrigo_logo.png` (Open Graph and Apple touch icon).
- Animations are pure CSS and are disabled under `prefers-reduced-motion: reduce`.
