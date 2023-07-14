<template>
  <div class="max-w-6xl mx-auto flex items-center px-4">
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full"
    >
      <Cart
        v-for="(list, index) in lists"
        :key="index"
        :fromUserSide="true"
        :id="list?.listing?.id"
        :imageSrc="list?.listing?.imageSrc"
        :locationValue="list?.listing?.locationValue"
        :price="list?.listing?.price"
        :category="list?.listing?.category"
        :startDate="list?.startDate"
        :endDate="list?.endDate"
        :fromReserve="true"
        :reservationId="list?.id"
        @removeItem="removeHandler"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
let { getReservations, reservingList, removeReservation } = useReserving();

onBeforeMount(async () => {
  await getReservations();
});

const lists = computed(() => {
  return reservingList?.value;
});

const removeHandler = async (id: string) => {
  await removeReservation(id);
};
</script>
