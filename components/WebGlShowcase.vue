<template>
  <div class="grid items-start gap-10 lg:grid-cols-2">
    <div>
      <h2 class="text-3xl font-semibold tracking-tight">A modern, fast experience</h2>
      <p class="mt-3 max-w-xl text-base opacity-85">
        This section is a placeholder structure for richer visuals (WebGL / Three.js). Keep it, replace it,
        or wire it up to real product UI.
      </p>

      <ul class="mt-6 space-y-3 text-sm opacity-85">
        <li class="flex gap-3">
          <span class="mt-1 h-2 w-2 flex-none rounded-full bg-ziptrigo-forest" />
          Lightweight scene (no heavy assets)
        </li>
        <li class="flex gap-3">
          <span class="mt-1 h-2 w-2 flex-none rounded-full bg-ziptrigo-moss" />
          Runs client-side only
        </li>
        <li class="flex gap-3">
          <span class="mt-1 h-2 w-2 flex-none rounded-full bg-ziptrigo-stone" />
          Easy to swap for a real product demo
        </li>
      </ul>
    </div>

    <WebGlCanvas />
  </div>
</template>
