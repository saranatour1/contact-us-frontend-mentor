<script setup lang="ts">
import { computed, inject, ref } from 'vue';

const props = defineProps<{
  value?: number  
}>();

const checked = inject('radio', ref<number>())
const isDisabled = inject('isDisabled', ref(false))

const isSelected = computed(() => {
  return checked.value === props.value
})


</script>
<template>
  <label class="w-full h-full rounded-[.3125rem] cursor-pointer bg-[#00474B] text-center p-[.3rem] text-white text-[1.5rem] font-spaceMono font-bold transition-colors" :class="{ '!bg-[#26C2AE] !text-[#00474B]': !isDisabled && isSelected }">
    <input class="sr-only" type="radio" :value="props.value" v-model="checked"> 
    <slot />
  </label>
</template>