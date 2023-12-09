<template>
  <ul class="py-0 flex flex-col justify-center items-center gap-3" ref="list">
    <li v-for="link in aside.links" :key="link.title">
      <nuxt-link
        :to="link.path"
        activeClass="text-accent"
        class="text-center btn btn-ghost hover:bg-transparent hover:border-transparent hover:text-white"
      >
        <p><i :class="'bx bx-md ' + link.icon"></i></p>
        {{ link.title }}
      </nuxt-link>
    </li>
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import autoAnimate from '@formkit/auto-animate'

const { aside } = storeToRefs(useMain())

const list = ref<HTMLElement | null>(null)
onMounted(() => {
  if (list.value) autoAnimate(list.value)
})
</script>
