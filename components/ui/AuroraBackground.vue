<template>
  <div :class="wrapperClass" v-bind="attrs">
    <div v-if="enabled" class="absolute inset-0 overflow-hidden">
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
import { computed, useAttrs } from 'vue'

type Props = {
  enabled?: boolean
  showRadialGradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  enabled: true,
  showRadialGradient: true,
})

const enabled = computed(() => props.enabled)

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
