<template>
  <div class="min-h-screen bg-ziptrigo-sage text-ziptrigo-ink antialiased">
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
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

    <NavBar />
    <NuxtPage />
  </div>
</template>
