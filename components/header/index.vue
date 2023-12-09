<template>
  <div class="drawer max-w-[100vw] md:drawer-open" :class="{ 'mt-[28px]': $isApp }">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <header-navbar>
      <slot />
    </header-navbar>
    <header-aside />
  </div>
</template>

<script lang="ts" setup>
const { $isApp } = useNuxtApp()
</script>
