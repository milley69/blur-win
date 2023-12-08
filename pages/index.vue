<template>
  <div>
    <h1 class="text-2xl underline">Page: index {{ emoji.random().emoji }}</h1>
  </div>
</template>

<script lang="ts" setup>
import * as emoji from 'node-emoji'
</script>
