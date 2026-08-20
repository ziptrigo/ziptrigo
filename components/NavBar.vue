<template>
  <header class="sticky top-0 z-50 border-b border-ziptrigo-ink/10 bg-ziptrigo-sage/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" class="flex items-center gap-3">
        <img
          src="/ziptrigo_logo.webp"
          alt="ZipTrigo"
          width="36"
          height="36"
          class="h-9 w-auto rounded-md bg-ziptrigo-mist/60 p-1"
        />
        <span class="text-sm font-semibold tracking-wide">ZipTrigo</span>
      </a>

      <nav class="hidden items-center gap-6 text-sm sm:flex" aria-label="Primary">
        <a v-for="item in links" :key="item.href" class="opacity-80 hover:opacity-100" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          href="#cta"
          class="inline-flex items-center rounded-full bg-ziptrigo-ink px-4 py-2 text-sm font-semibold text-ziptrigo-mist shadow-soft transition hover:bg-ziptrigo-forest"
        >
          Get started<span class="hidden sm:inline">&nbsp;with credits</span>
        </a>

        <button
          type="button"
          class="inline-flex items-center rounded-md border border-ziptrigo-ink/15 p-2 transition hover:bg-ziptrigo-mist/40 focus:outline-none focus:ring-2 focus:ring-ziptrigo-forest/30 sm:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <span class="sr-only">{{ open ? 'Close menu' : 'Open menu' }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <template v-if="open">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </template>
            <template v-else>
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </template>
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-show="open"
      id="mobile-nav"
      aria-label="Primary"
      class="border-t border-ziptrigo-ink/10 sm:hidden"
    >
      <div class="mx-auto flex max-w-6xl flex-col px-6 py-2">
        <a
          v-for="item in links"
          :key="item.href"
          class="rounded-md px-2 py-3 text-sm hover:bg-ziptrigo-mist/40"
          :href="item.href"
          @click="open = false"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { href: '#tools', label: 'Tools' },
  { href: '#credits', label: 'How credits work' },
  { href: '#who', label: 'Who it’s for' },
  { href: '#pricing', label: 'Pricing' },
]

const open = ref(false)
</script>
