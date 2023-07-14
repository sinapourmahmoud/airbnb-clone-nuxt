<template>
  <div class="max-w-6xl mx-auto flex flex-col gap-5 px-4">
    <PageTitle title="Favorites" subtitle="Here are your favorites" />

    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full"
    >
      <Cart
        v-for="(data, index) in useFavoritesData"
        :key="index"
        :id="data?.id"
        :imageSrc="data?.imageSrc"
        :locationValue="data.locationValue"
        :price="data?.price"
        :category="data.category"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
let { fetchFavorites, useFavoritesData } = useFetch();
let { useUser } = useAuth();

onMounted(async () => {
  let data = await fetchFavorites();
  console.log(useFavoritesData.value);
});
</script>
