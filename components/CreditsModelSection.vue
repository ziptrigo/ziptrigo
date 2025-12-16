<template>
  <div>
    <h2 class="text-3xl font-semibold tracking-tight">One balance. Multiple tools.</h2>
    <p class="mt-3 max-w-3xl text-base opacity-85">ZipTrigo uses a simple credit system:</p>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <div class="rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 p-6 shadow-soft">
        <ol class="space-y-3 text-sm opacity-90">
          <li>
            <span class="font-semibold">Purchase credits</span> in advance (for example, $10 in credits).
          </li>
          <li><span class="font-semibold">Use those credits</span> across any ZipTrigo tool.</li>
          <li><span class="font-semibold">Credits are deducted</span> only when you use a feature.</li>
        </ol>
      </div>

      <div class="rounded-3xl border border-ziptrigo-ink/10 bg-ziptrigo-mist/40 p-6 shadow-soft">
        <div id="credit-examples" class="text-sm font-semibold">Credit usage examples</div>
        <ul class="mt-3 space-y-2 text-sm opacity-90">
          <li>Create a QR code? Spend a few credits.</li>
          <li>Forward an email? Spend a few more.</li>
          <li>Shorten a URL? Same balance.</li>
        </ul>
      </div>
    </div>

    <p class="mt-6 max-w-3xl text-sm opacity-85">No monthly resets. No expiration pressure. No wasted spend.</p>

    <a
      class="mt-4 inline-flex text-sm font-semibold underline underline-offset-4 opacity-85 hover:opacity-100"
      href="#credit-examples"
    >
      See Credit Usage Examples
    </a>
  </div>
</template>
