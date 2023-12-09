<template>
  <Body class="transition duration-300 max-h-screen bg-base-100">
    <LazyTauriTitlebar v-if="$isApp" />
    <Header>
      <main class="">
        <slot />
      </main>
    </Header>
  </Body>
</template>

<script setup lang="ts">
const { $isApp } = useNuxtApp()
</script>
