<template>
  <section class="mx-auto max-w-6xl px-6 py-16 sm:py-24">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <div
          class="mb-6 inline-flex items-center gap-3 rounded-full border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 px-4 py-2"
        >
          <img
            src="/ziptrigo_logo.png"
            alt="ZipTrigo"
            class="h-7 w-auto"
          />
          <span class="text-xs font-semibold tracking-wide opacity-90">Pay-as-you-go online tools</span>
        </div>

        <h1
          ref="titleEl"
          class="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          Simple tools. Fair pricing. No subscriptions.
        </h1>

        <p ref="subtitleEl" class="mt-5 max-w-xl text-pretty text-base opacity-85 sm:text-lg">
          QR codes, short links with Shortly, and email-to-files with Mailio—built for individuals and small
          businesses who want utility without recurring costs.
        </p>

        <p class="mt-4 max-w-xl text-pretty text-sm opacity-85 sm:text-base">
          ZipTrigo gives you essential online tools on a pay-as-you-go basis. Buy credits once, use them across all
          tools, and only pay for what you actually consume.
        </p>

        <div ref="ctaEl" class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#cta"
            class="inline-flex items-center justify-center rounded-full bg-ziptrigo-ink px-6 py-3 text-sm font-semibold text-ziptrigo-mist shadow-soft transition hover:bg-ziptrigo-forest"
          >
            Get Started with Credits
          </a>
          <a
            href="#tools"
            class="inline-flex items-center justify-center rounded-full border border-ziptrigo-ink/20 bg-transparent px-6 py-3 text-sm font-semibold transition hover:bg-ziptrigo-mist/30"
          >
            View Tools
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 p-6 shadow-soft">
          <div class="flex items-center justify-between">
            <div class="text-sm font-semibold">ZipTrigo (preview)</div>
            <div class="flex gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-ziptrigo-stone" />
              <span class="h-2.5 w-2.5 rounded-full bg-ziptrigo-moss" />
              <span class="h-2.5 w-2.5 rounded-full bg-ziptrigo-forest" />
            </div>
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl bg-white/40 p-4">
              <div class="text-xs font-semibold opacity-80">Credit balance</div>
              <div class="mt-2 text-sm opacity-90">One balance you can use across every tool.</div>
            </div>
            <div class="rounded-2xl bg-white/40 p-4">
              <div class="text-xs font-semibold opacity-80">QR Codes</div>
              <div class="mt-2 text-sm opacity-90">Generate reliable codes for print and web.</div>
            </div>
            <div class="rounded-2xl bg-white/40 p-4">
              <div class="text-xs font-semibold opacity-80">Shortly</div>
              <div class="mt-2 text-sm opacity-90">Short links for sharing, campaigns, and internal use.</div>
            </div>
            <div class="rounded-2xl bg-white/40 p-4">
              <div class="text-xs font-semibold opacity-80">Mailio</div>
              <div class="mt-2 text-sm opacity-90">Save email bodies and attachments as separate files.</div>
            </div>
          </div>
        </div>

        <div
          class="pointer-events-none absolute -right-10 -top-10 hidden h-36 w-36 rounded-full border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 blur-[1px] lg:block"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const titleEl = ref<HTMLElement | null>(null)
const subtitleEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)

const shouldReduceMotion = (): boolean => {
  if (!import.meta.client) {
    return true
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onMounted(async () => {
  if (shouldReduceMotion()) {
    return
  }

  const { gsap } = await import('gsap')

  gsap.from([titleEl.value, subtitleEl.value, ctaEl.value].filter(Boolean), {
    opacity: 0,
    y: 16,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.08,
  })
})
</script>
