<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg font-semibold">{{ props.title }}</h2>
    <small class="text-gray-500">{{ props.subTitle }}</small>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: String;
  subTitle: String;
}

let props = defineProps<Props>();
</script>
