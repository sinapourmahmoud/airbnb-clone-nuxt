<template>
  <div
    @click="handleClick"
    class="w-full p-2 py-4 cursor-pointer transition-all duration-300 hover:bg-gray-100 rounded-lg"
  >
    {{ title }}
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: String;
}

let { title } = defineProps<Props>();
let emits = defineEmits<{
  (event: "clicked", title: String): void;
}>();
const handleClick = () => {
  emits("clicked", title);
};
</script>
