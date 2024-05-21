<script setup lang="ts">
import { provide } from 'vue';

defineProps()

const modelValue = defineModel<number>()

provide('radio', modelValue)
</script>

<template>
    <fieldset>
      <slot />
    </fieldset>
</template>