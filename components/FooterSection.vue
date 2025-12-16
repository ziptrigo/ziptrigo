<template>
  <footer class="border-t border-ziptrigo-ink/10">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex items-center gap-3">
        <img
          src="/ziptrigo_logo.png"
          alt="ZipTrigo"
          class="h-9 w-auto rounded-md bg-ziptrigo-mist/60 p-1"
        />
        <div>
          <div class="text-sm font-semibold">ZipTrigo</div>
          <div class="text-xs opacity-75">QR Codes · Shortly · Mailio</div>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm opacity-80">
        <a class="hover:opacity-100" href="#tools">Tools</a>
        <a class="hover:opacity-100" href="#credits">Credits</a>
        <a class="hover:opacity-100" href="#who">Who it’s for</a>
        <a class="hover:opacity-100" href="#pricing">Pricing</a>
        <a class="hover:opacity-100" href="#cta">Start</a>
      </div>

      <div class="flex flex-nowrap items-center justify-end gap-3 whitespace-nowrap text-xs">
        <button
          type="button"
          class="inline-flex shrink-0 items-center rounded-md border border-ziptrigo-ink/15 bg-ziptrigo-mist/40 px-2 py-1 leading-none text-ziptrigo-ink/80 shadow-sm transition hover:bg-ziptrigo-mist/60 hover:text-ziptrigo-ink focus:outline-none focus:ring-2 focus:ring-ziptrigo-forest/30"
          :aria-pressed="auroraEnabled"
          :title="auroraEnabled ? 'Disable background animation' : 'Enable background animation'"
          @click="toggleAurora"
        >
          <span class="sr-only">Toggle background animation</span>
          <span aria-hidden="true">{{ auroraEnabled ? 'Anim: on' : 'Anim: off' }}</span>
        </button>

        <div class="shrink-0 leading-none opacity-70">
          © {{ new Date().getFullYear() }} ZipTrigo
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { auroraEnabled, toggleAurora } = useAuroraPreference()
</script>
