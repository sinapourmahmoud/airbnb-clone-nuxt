<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-col gap-1">
      <h2 class="text-lg font-semibold">{{ props.title }}</h2>
      <span class="text-gray-500 text-sm">{{ props.subtitle }}</span>
    </div>
    <div class="flex items-center gap-1">
      <div class="flex items-center justify-center gap-2">
        <svg
          @click="emits('min', props.composable)"
          class="fill-slate-500 w-10 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path
            d="M280-453h400v-60H280v60ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
          />
        </svg>

        <p class="text-slate-500 font-medium text-base">{{ props.count }}</p>
        <svg
          @click="emits('plus', props.composable)"
          class="fill-slate-500 w-10 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path
            d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  count: number;
  composable: string;
}

let props = defineProps<Props>();
let emits = defineEmits<{
  (event: "plus", composable: string): void;
  (event: "min", composable: string): void;
}>();
</script>
