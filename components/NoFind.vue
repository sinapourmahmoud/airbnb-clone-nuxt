<template>
  <div class="flex items-center justify-center flex-col">
    <h3 class="text-lg font-semibold">No items found</h3>
    <Button
      :title="props.title"
      type="button"
      outline
      small
      v-show="buttonDisplay"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  buttonDisplay?: boolean | true;
}

let props = defineProps<Props>();
let emit = defineEmits<{
  (event: "clicked"): void;
}>();
const handleClick = () => {
  emit("clicked");
};
</script>
