<template>
  <div>
    <h2 class="text-3xl font-semibold tracking-tight">Everything you need to run the business</h2>
    <p class="mt-3 max-w-2xl text-base opacity-85">
      ZipTrigo brings your core tools together—so you spend less time on admin and more time serving customers.
    </p>

    <div ref="gridEl" class="mt-10 grid gap-6 md:grid-cols-3">
      <div class="feature-card rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 p-6 shadow-soft">
        <div class="text-sm font-semibold">Smart Client Relations (CRM)</div>
        <p class="mt-3 text-sm opacity-85">
          Know your customer. Automated lead tracking and a unified communication timeline so you never miss a beat.
        </p>
      </div>

      <div class="feature-card rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 p-6 shadow-soft">
        <div class="text-sm font-semibold">Instant Invoicing &amp; Payments</div>
        <p class="mt-3 text-sm opacity-85">
          Send professional, recurring invoices and get paid faster with integrated payment gateways.
          Zero-friction billing.
        </p>
      </div>

      <div class="feature-card rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 p-6 shadow-soft">
        <div class="text-sm font-semibold">Seamless Project Management</div>
        <p class="mt-3 text-sm opacity-85">
          Tame the chaos. Visualize tasks, manage team workload, and hit deadlines—all in one intuitive dashboard.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const gridEl = ref<HTMLElement | null>(null)

const shouldReduceMotion = (): boolean => {
  if (!import.meta.client) {
    return true
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onMounted(async () => {
  if (shouldReduceMotion() || !gridEl.value) {
    return
  }

  const { gsap } = await import('gsap')
  const ScrollTriggerMod = await import('gsap/ScrollTrigger')
  const ScrollTrigger = ScrollTriggerMod.ScrollTrigger

  gsap.registerPlugin(ScrollTrigger)

  gsap.from(gridEl.value.querySelectorAll('.feature-card'), {
    opacity: 0,
    y: 18,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: gridEl.value,
      start: 'top 80%',
    },
  })
})
</script>
