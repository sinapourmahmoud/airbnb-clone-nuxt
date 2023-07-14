<template>
  <div class="flex flex-col gap-3">
    <h2 class="text-xl font-semibold">{{ props.title }}</h2>
    <small class="text-gray-500 font-light">{{ subtitle }}</small>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}
let props = defineProps<Props>();
</script>
