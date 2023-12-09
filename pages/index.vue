<template>
  <section class="h-full bg-base-200">
    <h1 class="text-2xl underline">Page: index {{ emoji.random().emoji }}</h1>
    <button class="btn btn-primary" @click.prevent="qwe">qwe</button>
    <button class="btn btn-primary" @click.prevent="qqq">qqq</button>

    <!--  -->

    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { aside } = storeToRefs(useMain())

const colorMode = useColorMode()

const qwe = () => {
  aside.value.links.push({ icon: '', path: '/', title: 'hello' })
}

const qqq = () => {
  aside.value.links.sort(() => (Math.random() > 0.5 ? 1 : -1))
}
</script>
