<template>
  <div
    @click="modalToggle = 'filterItem'"
    class="flex flex-1 md:flex-[0.5] rounded-full h-full border cursor-pointer transition-all duration-300 hover:shadow-md"
  >
    <div class="p-3 flex-1 flex items-center justify-between px-8">
      <p class="font-semibold text-sm hidden md:block">Anywhere</p>
      <p class="font-semibold text-sm hidden md:block">Anywhere</p>
      <p class="text-base md:border-l pl-5">Anywhere</p>
    </div>
    <div class="rounded-full p-3 bg-rose-500 flex items-center justify-center">
      <MagnifyingGlassIcon class="w-6 h-6 text-white" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

let { modalToggle } = useVars();
</script>
