<script setup lang="ts">
const emits = defineEmits(['submit', 'reset'])
</script>

<template>
  <form class=" w-full max-w-[46rem] max-sm:max-w-[100vw] p-2xl bg-white h-auto rounded-2xl"
    @submit.prevent="emits('submit')" @reset="emits('reset')">
    <slot />
  </form>
</template>