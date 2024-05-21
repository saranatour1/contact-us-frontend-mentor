<script setup lang="ts">

export interface Props {
  type?: "text" | "number" | "email" | "";
  label:string;
  id?:string;
  name?:string;
  error?:string;
} 
const model = defineModel();
const props = withDefaults(defineProps<Props>(), {
  type:"text",
})
</script>

<template>
  <label class="flex flex-col justify-start items-start w-full gap-y-xs">
    <span class="body-s after:content-['*'] after:ml-xs after:text-green-200">{{ label }}</span>
    <input type="text" v-model="model" class="w-full px-l py-s rounded-lg bg-white border border-grey-100 body-medium-regular hover:border-green-200 hover:cursor-pointer transition-colors"/>
    <span v-if="error">{{ error }}</span>
  </label>
</template>