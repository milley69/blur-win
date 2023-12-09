<template>
  <div class="drawer-side z-40">
    <label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
    <aside class="bg-base-100 w-24 h-screen overflow-hidden flex flex-col justify-between pt-0">
      <div class="flex flex-col justify-center items-center pt-2">
        <!-- <div class="flex items-center justify-center py-2"> -->
        <button
          class="btn btn-ghost mb-4"
          @click="aside.title = `:${emoji.random().name}:`"
          @auxclick.stop="aside.title = 'blur'"
        >
          <i class="emoji emoji-md">{{ emoji.emojify(aside.title) }}</i>
        </button>
        <!-- </div> -->
        <header-links>
          <div class="h-4"></div>
          <!-- <lazy-header-projects /> -->
        </header-links>
      </div>
      <div class="px-4 mb-4">
        <!-- <header-actions /> -->
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const { aside } = storeToRefs(useMain())
</script>
