<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import RadioIcon from './RadioIcon.vue';

const props = defineProps<{
  value?: string
}>();

const checked = inject('radio', ref<string>())

const isSelected = computed(() => {
  return checked.value === props.value
})


</script>
<template>
  <label
    class="w-full h-full cursor-pointer p-l py-s flex items-center justify-start border border-grey-100 rounded-lg bg-white gap-x-s transition-colors body-medium-regular"
    :class="{ ' !bg-green-100 border-green-200': isSelected }">
    <input class="sr-only" type="radio" :value="props.value" v-model="checked">
    <RadioIcon :isSelected="isSelected" />
    <slot />
  </label>
</template>