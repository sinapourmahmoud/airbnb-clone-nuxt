<template>
  <div
    class="col-span-1 aspect-square rounded-xl cursor-pointer flex flex-col gap-3"
  >
    <div class="aspect-square w-full rounded-xl overflow-hidden relative">
      <SolidIcon
        @click.capture="handleLike"
        class="w-7 absolute top-2 right-2 z-30"
        :class="isLiked ? 'text-red-500' : 'text-gray-500'"
        v-show="!!useUser"
      />
      <img
        :src="imageSrc"
        alt="product-image"
        class="w-full h-full object-cover rounded-xl transition-all duration-300 hover:scale-110"
      />
    </div>
    <h3 class="text-lg font-semibold" @click="handleRouting">
      {{ locationValue }} , {{ countryItem?.region }}
    </h3>
    <small
      class="text-gray-500 text-base font-light"
      @click="handleRouting"
      v-show="!fromUserSide"
    >
      {{ category }}
    </small>
    <small
      class="text-gray-500 text-base font-light"
      @click="handleRouting"
      v-show="fromUserSide"
    >
      {{ startDate }} - {{ endDate }}
    </small>
    <p class="text-base font-normal">{{ price }} $ night</p>
    <Button
      @clicked="removeHandler"
      :title="fromReserve ? 'Clear from reservations' : 'clear from properties'"
      type="button"
      v-show="fromUserSide"
      small
    />
  </div>
</template>
<script setup lang="ts">
import { Listing } from ".prisma/client";
import { HeartIcon as SolidIcon } from "@heroicons/vue/24/solid";

import { getCountry } from "~/utils/countries";

interface Props {
  id?: string;
  fromUserSide?: boolean | false;
  imageSrc?: string;
  locationValue?: string;
  price?: number | string;
  category: string;
  startDate?: string;
  endDate?: string;
  fromReserve?: boolean | false;
  reservationId?: string;
}

let { useUser } = useAuth();

let { addLikeDislike } = useProduct();

let {
  fromUserSide,
  imageSrc,
  fromReserve,
  reservationId,
  locationValue,
  price,
  category,
  id,
  startDate,
  endDate,
} = defineProps<Props>();

let emits = defineEmits<{
  (event: "removeItem", id: string): void;
}>();

let isLiked = computed(() => {
  return useUser?.value?.favoriteIds?.some((item: string) => item === id);
});

let countryItem = computed(() => {
  return getCountry(locationValue as string);
});

const handleLike = () => {
  addLikeDislike(id as string, useRoute().fullPath);
};
const handleRouting = () => {
  useRouter().push(`/listing/${id}`);
};

const removeHandler = () => {
  emits("removeItem", reservationId as string);
};
</script>
