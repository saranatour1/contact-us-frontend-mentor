<script setup lang="ts">
defineProps<{
  label: string;
  error?: string;
}>()
const consent = defineModel<boolean>();
</script>

<template>
  <label class=" flex flex-col py-2xl">
    <div class="flex gap-x-m ">
      <input class=" border border-grey-100 hover:cursor-pointer checked:accent-green-200 transition-all"
        type="checkbox" v-model="consent" />
      <span class="body-s after:content-['*'] after:ml-xs after:text-green-200">{{ label }}</span>
    </div>
    <span v-if="error" class="body-s !text-red-950">{{ error }}</span>
  </label>
</template>