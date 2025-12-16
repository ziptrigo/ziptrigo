<template>
  <div class="rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-ink p-8 text-ziptrigo-mist shadow-soft">
    <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 class="text-3xl font-semibold tracking-tight">Start Your Free 14-Day Trial. No Credit Card Needed.</h2>
        <p class="mt-3 max-w-xl text-sm opacity-85">
          Get the essentials in minutes: contacts, invoices, and projects—ready to go.
        </p>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <label class="sr-only" for="cta-email">Email</label>
        <input
          id="cta-email"
          class="h-11 w-full rounded-full bg-white/10 px-4 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-ziptrigo-mist/60 sm:max-w-xs"
          placeholder="you@company.com"
          type="email"
        />
        <button
          class="h-11 rounded-full bg-ziptrigo-mist px-6 text-sm font-semibold text-ziptrigo-ink transition hover:bg-white"
          type="button"
        >
          Create account
        </button>
      </div>
    </div>
  </div>
</template>
