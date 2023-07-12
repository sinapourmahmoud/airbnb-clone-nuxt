<template>
  <div class="max-w-7xl mx-auto flex items-center px-4">
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full"
    >
      <Cart
        v-for="(data, index) in useFetchingData"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
let { fetchListings, useFetchingData } = useFetch();

onBeforeMount(() => {
  fetchListings();
  console.log(useFetchingData.value);
});
</script>
