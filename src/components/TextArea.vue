
<script setup lang="ts">
import { ref } from 'vue';
  defineProps<{
    label:string
  }>()
  const message = ref('')
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <textarea v-model="message"></textarea>
  </label>
</template>