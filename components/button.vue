<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="`text-center w-full   rounded-xl
    transition-all duration-300 disabled:opacity-80
        ${small ? 'py-1' : 'py-3'}
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
</script>
