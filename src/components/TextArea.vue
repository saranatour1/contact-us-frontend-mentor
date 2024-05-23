<script setup lang="ts">
defineProps<{
  label: string,
  error?: string,
}>()
const message = defineModel<string>();
</script>

<template>
  <label class="flex flex-col items-start justify-between w-full gap-y-xs">
    <span class="body-s after:content-['*'] after:ml-xs after:text-green-200">{{ label }}</span>
    <textarea class="w-full py-s px-l body-medium-regular resize-none border border-grey-100 rounded-lg"
      :class="{ 'border-red-950': error?.length }" v-model="message"></textarea>
    <span v-if="error" class="body-s !text-red-950">{{ error }}</span>
  </label>
</template>