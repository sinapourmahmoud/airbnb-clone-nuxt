<template>
  <button
    @click="addClick"
    :type="type"
    :disabled="disabled"
    :class="`text-center w-full   rounded-xl
    transition-all duration-300 disabled:opacity-50
    disabled:cursor-not-allowed
        ${small ? 'py-2 text-sm font-light' : 'py-3 text-base'}
    ${
      outline
        ? 'bg-white border border-black/80 '
        : 'hover:opacity-80 bg-rose-500 text-white'
    }`"
  >
    {{ title }}
  </button>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  outline?: boolean;
  small?: boolean;
  disabled?: boolean;
}

let { type } = defineProps<Props>();
let emit = defineEmits<{
  (event: "clicked"): void;
}>();
const addClick = () => {
  emit("clicked");
};
</script>
