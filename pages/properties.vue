<template>
  <div class="max-w-6xl mx-auto flex flex-col gap-5 px-4">
    <PageTitle title="Properties" subtitle="Here are your properties" />
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full"
    >
      <Cart
        v-for="(list, index) in usePropertiesData"
        :key="index"
        :fromUserSide="true"
        :id="list?.listing?.id"
        :imageSrc="list?.listing?.imageSrc"
        :locationValue="list?.listing?.locationValue"
        :price="list?.totalPrice"
        :category="list?.listing?.category"
        :startDate="list?.startDate"
        :endDate="list?.endDate"
        :reservationId="list?.id"
        @removeItem="removeHandler"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
let { fetchProperties, usePropertiesData } = useFetch();
let { removeReservation } = useReserving();
onBeforeMount(async () => {
  await fetchProperties();
});
const removeHandler = async (id: string) => {
  await removeReservation(id);
};
</script>
