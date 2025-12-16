# ZipTrigo Landing (Nuxt 4 + Tailwind + GSAP)

Single-page marketing landing page for ZipTrigo (QR codes, short links, and email forwarding).

## Requirements

- Node.js 22+ (Nuxt 4/Vite build uses `crypto.hash`, which is not available in Node 21)

## Local development

From the repo root:

```bash
cd ziptrigo
corepack yarn install
corepack yarn dev
```

Then open `http://localhost:3000`.

## Build static site (SSG)

This project is configured for static output.

```bash
cd ziptrigo
corepack yarn generate
```

Static files will be generated under `.output/public`.

## Docker (static via Nginx)

Build:

```bash
cd ziptrigo
docker build -t ziptrigo-landing .
```

Run (container listens on port 8005):

```bash
docker run --rm -p 8005:8005 ziptrigo-landing
```

Open `http://localhost:8005`.

## Background animation (Aurora)

This landing page includes a subtle animated aurora background.

- Wrapper component: `components/ui/AuroraBackground.vue`
- Toggle button: in the footer (left of the copyright)
- Persistence: stored in `localStorage` under `ziptrigo:aurora-enabled` (`'1'` enabled, `'0'` disabled)

### Tuning the effect

1. Animation speed
- `tailwind.config.js`: `theme.extend.animation.aurora` (default: `60s`)

2. Intensity
- `components/ui/AuroraBackground.vue`:
  - `opacity-30` (lower = more subtle)
  - `blur-[14px]` (higher = softer)
  - `saturate-125` (lower = less vivid)
  - `after:mix-blend-multiply` (blend mode affects contrast)

3. Palette
The aurora uses ZipTrigo greens via CSS variables like `var(--ziptrigo-sage)`.
These are generated from Tailwind colors in `tailwind.config.js`.

## Notes

- The logo is served from `public/ziptrigo_logo.png`.
- Animations are implemented with GSAP and run client-side only.
