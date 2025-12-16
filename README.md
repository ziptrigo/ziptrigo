# ZipTrigo Landing (Nuxt 4 + Tailwind + GSAP + Three.js)

Single-page marketing landing page for ZipTrigo (CRM, invoicing, and project management).

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

## Notes

- The logo is served from `public/ziptrigo_logo.png`.
- Animations are implemented with GSAP and run client-side only.
- The WebGL section uses Three.js as a lightweight placeholder scene.
