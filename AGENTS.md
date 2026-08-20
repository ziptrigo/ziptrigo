# ZipTrigo landing (Warp notes)
This repo is a Nuxt 4 + Tailwind landing page.

## Background animation (Aurora)
A subtle animated aurora background is implemented as a wrapper component:
- `components/ui/AuroraBackground.vue`

It is enabled by default and can be toggled via the footer button. The choice persists across page loads via `localStorage`.

### Toggle + persistence
- UI: footer toggle in `components/FooterSection.vue`
- State + persistence: `composables/useAuroraPreference.ts`
- Storage key: `ziptrigo:aurora-enabled` (`'1'` enabled, `'0'` disabled)

### Performance notes
When disabled, the aurora layer is not rendered (`v-if`), which avoids the animation + blend work.

### Settings you can tweak
1. Animation speed
- `tailwind.config.js`: `theme.extend.animation.aurora`
- Example: change `60s` to `90s` for slower or `45s` for faster.

2. Intensity (recommended knobs)
- `components/ui/AuroraBackground.vue`:
  - `opacity-30` (lower = more subtle)
  - `blur-[14px]` (higher = softer)
  - `saturate-125` (lower = less vivid)
  - `after:mix-blend-multiply` (blend mode affects contrast)

3. Palette
- `components/ui/AuroraBackground.vue` uses CSS variables derived from Tailwind colors:
  - `var(--ziptrigo-sage)`, `var(--ziptrigo-mist)`, `var(--ziptrigo-stone)`, `var(--ziptrigo-moss)`, `var(--ziptrigo-forest)`
- These variables are provided by a Tailwind plugin in `tailwind.config.js`.

4. Radial mask
- `components/ui/AuroraBackground.vue`: prop `showRadialGradient` controls the mask.
