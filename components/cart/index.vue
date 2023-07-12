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
        :src="data?.imageSrc"
        alt="product-image"
        class="w-full h-full object-cover rounded-xl transition-all duration-300 hover:scale-110"
      />
    </div>
    <h3 class="text-lg font-semibold" @click="handleRouting">
      {{ data?.locationValue }} , {{ countryItem.region }}
    </h3>
    <small class="text-gray-500 text-base font-light" @click="handleRouting">{{
      data?.category
    }}</small>
    <p class="text-base font-normal">{{ data?.price }} $ night</p>
    <Button
      title="Clear from properties"
      type="button"
      v-show="fromProperties"
      small
    />
  </div>
</template>
<script setup lang="ts">
import { Listing } from ".prisma/client";
import { HeartIcon as SolidIcon } from "@heroicons/vue/24/solid";

import { getCountry } from "~/utils/countries";

interface Props {
  data: Listing | null;
  fromProperties?: boolean | false;
}

let { useUser } = useAuth();

let { addLikeDislike } = useProduct();

let { data, fromProperties } = defineProps<Props>();

let isLiked = computed(() => {
  return useUser?.value?.favoriteIds?.some((item: string) => item === data?.id);
});

let countryItem = computed(() => {
  return getCountry(data?.locationValue as string);
});

const handleLike = () => {
  addLikeDislike(data?.id as string);
};
const handleRouting = () => {
  useRouter().push(`/listing/${data?.id}`);
};
</script>
