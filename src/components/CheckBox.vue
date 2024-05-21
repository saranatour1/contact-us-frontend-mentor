<script setup lang="ts">
import { ref } from 'vue';
  defineProps<{
    label:string
  }>()
  const consent = ref(false)
</script>

<template>
  <label>
    <input type="checkbox" v-model="consent" />
    <span>{{ label }}</span>
  </label>
</template>