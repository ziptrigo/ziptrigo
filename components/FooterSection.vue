<template>
  <footer class="border-t border-ziptrigo-ink/10">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-3">
        <img
          src="/ziptrigo_logo.png"
          alt="ZipTrigo"
          class="h-9 w-auto rounded-md bg-ziptrigo-mist/60 p-1"
        />
        <div>
          <div class="text-sm font-semibold">ZipTrigo</div>
          <div class="text-xs opacity-75">CRM · Invoicing · Project Management</div>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm opacity-80">
        <a class="hover:opacity-100" href="#features">Features</a>
        <a class="hover:opacity-100" href="#webgl">Demo</a>
        <a class="hover:opacity-100" href="#testimonial">Customers</a>
        <a class="hover:opacity-100" href="#cta">Start</a>
      </div>

      <div class="text-xs opacity-70">© {{ new Date().getFullYear() }} ZipTrigo</div>
    </div>
  </footer>
</template>
