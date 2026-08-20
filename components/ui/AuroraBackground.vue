<template>
  <div class="relative flex min-h-dvh flex-col bg-ziptrigo-sage text-ziptrigo-ink antialiased">
    <div v-if="enabled" class="pointer-events-none absolute inset-0 overflow-hidden">
      <div :class="auroraClass" />
    </div>

    <div v-else class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-ziptrigo-mist/70 blur-3xl"
      />
      <div
        class="absolute right-[-6rem] top-24 h-[28rem] w-[28rem] rounded-full bg-ziptrigo-forest/20 blur-3xl"
      />
      <div
        class="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-ziptrigo-moss/25 blur-3xl"
      />
    </div>

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  enabled?: boolean
  showRadialGradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  enabled: true,
  showRadialGradient: true,
})

// Palette variables come from the `@theme` block in assets/css/tailwind.css,
// which Tailwind v4 exports under the `--color-*` namespace.
const auroraClass = computed(() => {
  const base = [
    'pointer-events-none absolute -inset-[10px] opacity-30 blur-[14px] saturate-125',
    '[--base-gradient:repeating-linear-gradient(100deg,var(--color-ziptrigo-mist)_0%,var(--color-ziptrigo-mist)_7%,transparent_10%,transparent_12%,var(--color-ziptrigo-mist)_16%)]',
    '[--aurora:repeating-linear-gradient(100deg,var(--color-ziptrigo-sage)_10%,var(--color-ziptrigo-mist)_15%,var(--color-ziptrigo-stone)_20%,var(--color-ziptrigo-moss)_25%,var(--color-ziptrigo-forest)_30%)]',
    '[background-image:var(--base-gradient),var(--aurora)]',
    '[background-size:300%,_200%]',
    '[background-position:50%_50%,50%_50%]',
    'after:content-[\'\'] after:absolute after:inset-0 after:[background-image:var(--base-gradient),var(--aurora)]',
    'after:[background-size:200%,_100%]',
    'after:animate-aurora motion-reduce:after:animate-none',
    'after:mix-blend-multiply',
  ]

  const radial =
    props.showRadialGradient
      ? '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]'
      : null

  return [...base, radial]
})
</script>
