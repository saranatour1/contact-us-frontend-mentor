<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import CheckIcon from './CheckIcon.vue';

defineProps();

const timeoutId = ref<number | undefined>(undefined);
const wrapper = ref<HTMLElement | null>(null);

onMounted(() => {
  timeoutId.value = window.setTimeout(() => {
    if (wrapper.value) {
      wrapper.value.remove();
    }
  }, 5000);
});

onUnmounted(() => {
  if (timeoutId.value !== undefined) {
    clearTimeout(timeoutId.value);
  }
});
</script>

<template>
  <Teleport to="main">
    <div class="flex justify-center items-start w-full h-full absolute top-[0] left-[0] px-l py-l" ref="wrapper">
      <div class="p-l bg-grey-200 rounded-xl flex flex-col gap-y-xs">
        <div class="flex items-center justify-start gap-x-xs">
          <CheckIcon />
          <span class="body-medium-bold !text-white gap-x-xs">Message Sent!</span>
        </div>
        <span class="body-s !text-green-100">Thanks for completing the form. We’ll be in touch soon!</span>
      </div>
    </div>
  </Teleport>
</template>
