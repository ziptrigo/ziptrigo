<template>
  <div :class="wrapperClass" v-bind="attrs">
    <div class="absolute inset-0 overflow-hidden">
      <div :class="auroraClass" />
    </div>

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

type Props = {
  showRadialGradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showRadialGradient: true,
})

const attrs = useAttrs()

const wrapperClass = computed(() => {
  return 'relative flex min-h-screen flex-col bg-ziptrigo-sage text-ziptrigo-ink antialiased'
})

const auroraClass = computed(() => {
  const base = [
    'pointer-events-none absolute -inset-[10px] opacity-30 blur-[14px] saturate-125',
    '[--base-gradient:repeating-linear-gradient(100deg,var(--ziptrigo-mist)_0%,var(--ziptrigo-mist)_7%,transparent_10%,transparent_12%,var(--ziptrigo-mist)_16%)]',
    '[--aurora:repeating-linear-gradient(100deg,var(--ziptrigo-sage)_10%,var(--ziptrigo-mist)_15%,var(--ziptrigo-stone)_20%,var(--ziptrigo-moss)_25%,var(--ziptrigo-forest)_30%)]',
    '[background-image:var(--base-gradient),var(--aurora)]',
    '[background-size:300%,_200%]',
    '[background-position:50%_50%,50%_50%]',
    'after:content-[\'\'] after:absolute after:inset-0 after:[background-image:var(--base-gradient),var(--aurora)]',
    'after:[background-size:200%,_100%] after:[background-attachment:fixed]',
    'after:animate-aurora motion-reduce:after:animate-none',
    'after:mix-blend-multiply',
    'will-change-transform',
  ]

  const radial =
    props.showRadialGradient
      ? '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]'
      : null

  return [...base, radial]
})
</script>
