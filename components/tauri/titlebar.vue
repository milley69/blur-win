<template>
  <div
    data-tauri-drag-region
    class="h-[28px] select-none flex justify-between fixed inset-x-0 top-0 z-50 bg-base-100 p-px"
  >
    <div class="ml-2">
      <h1>Blur</h1>
    </div>
    <div class="">
      <button class="btn btn-square btn-xs btn-ghost m-px" type="button" @click="appWindow.minimize()">
        <i class="bx bx-minus bx-mm"></i>
      </button>
      <button class="btn btn-square btn-xs btn-ghost m-px" type="button" @click="appWindow.toggleMaximize()">
        <i class="bx bx-windows bx-xs"></i>
      </button>
      <button
        class="btn btn-square btn-xs btn-ghost hover:bg-error hover:text-error-content m-px"
        type="button"
        @click="appWindow.close()"
      >
        <i class="bx bx-x bx-mm"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { appWindow } from '@tauri-apps/api/window'
</script>

<style>
.titlebar {
  height: 30px;
  /* background: #329ea3; */
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  /* @apply h-[30px] select-none flex justify-end fixed inset-x-0 top-0 z-50 */
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.titlebar-button:hover {
  background: #5bbec3;
}
</style>
