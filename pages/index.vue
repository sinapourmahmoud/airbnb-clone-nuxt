<template>
  <div class="max-w-6xl mx-auto flex items-center px-4">
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full"
    >
      <Cart
        v-for="(data, index) in useFetchingData"
        :key="index"
        :id="data?.id"
        :imageSrc="data?.imageSrc"
        :locationValue="data?.locationValue"
        :price="data?.price"
        :category="data?.category"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
let { fetchListings, useFetchingData } = useFetch();
let route = useRoute();
let queries = route.query;

watch(
  () => route.query,
  (newVal) => {
    let queryUrl = "";
    for (let i in newVal) {
      queryUrl += `${i}=${newVal[i]}&`;
    }
    fetchListings(queryUrl);
  }
);

onBeforeMount(() => {
  let queryUrl = "";
  for (let item in queries) {
    queryUrl += `${item}=${queries[item]}&`;
  }
  fetchListings(queryUrl);
});
</script>
