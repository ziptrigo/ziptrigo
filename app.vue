<template>
  <AuroraBackground :enabled="auroraEnabled">
    <NavBar />
    <NuxtPage />
  </AuroraBackground>
</template>

<script setup lang="ts">
import AuroraBackground from '~/components/ui/AuroraBackground.vue'

const { auroraEnabled } = useAuroraPreference()
</script>
