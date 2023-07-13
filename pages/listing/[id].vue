<template>
  <div class="max-w-5xl mx-auto px-4">
    <h1 class="text-xl font-bold my-3">{{ pageData?.title }}</h1>
    <small class="text-gray-500 block mb-4 text-base font-light"
      >{{ pageData?.locationValue }} , {{ countryItem?.region }}</small
    >

    <div class="w-full h-[60vh] rounded-xl relative">
      <SolidIcon
        @click.capture="handleLike"
        class="w-7 absolute top-2 right-2 z-30 cursor-pointer"
        :class="isLiked ? 'text-red-500' : 'text-gray-500'"
        v-show="!!useUser"
      />
      <img
        :src="pageData?.imageSrc"
        class="w-full h-full object-cover rounded-xl"
        alt="poster"
      />
    </div>
    <div class="my-4 grid-cols-1 grid md:grid-cols-12 gap-3">
      <div
        class="col-span-full md:col-start-1 md:col-end-8 flex flex-col gap-8"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-3">
            <p class="font-light text-lg">
              Posted by ,
              <strong class="text-lg font-semibold">{{
                pageData?.user?.name
              }}</strong>
            </p>
            <img
              :src="
                pageData?.user?.image
                  ? pageData?.user?.image
                  : './../../assets/placeholder.jpg'
              "
              class="w-10 h-10 rounded-full object-cover"
              alt="profile"
            />
          </div>
          <div class="flex items-center gap-4">
            <small class="text-gray-600 font-medium"
              >Rooms : {{ pageData?.roomCount }}</small
            >
            <small class="text-gray-600 font-medium"
              >Guests : {{ pageData?.guestCount }}</small
            >
            <small class="text-gray-600 font-medium"
              >Bathrooms : {{ pageData?.bathroomCount }}</small
            >
          </div>
        </div>
        <div class="flex items-center gap-4">
          <component :is="iconName?.icon" class=""></component>
          <div class="flex flex-col gap-0.5">
            <h2 class="text-lg font-medium">{{ pageData?.category }}</h2>
            <small class="text-gray-700">{{ iconName?.description }}</small>
          </div>
        </div>
        <p class="text-base font-medium">{{ pageData?.description }}</p>
      </div>
      <div class="col-span-full md:col-start-8 md:col-end-13">
        <div class="flex items-center gap-2 pb-3 border-b border-gray-400">
          <p class="text-xl font-bold">$ {{ pageData?.price }}</p>
          <small class="text-gray-500 text-lg font-light">night</small>
        </div>
        <div class="py-3 flex flex-col gap-3">
          <VDatePicker
            v-model.range="range"
            mode="dateTime"
            :attributes="attributes"
            class="my-calendar"
            expanded
            :min-date="new Date()"
            show-caps
            transparent
            borderless
          />
          <Button title="Reserve" type="button" @clicked="handleReserving" />
          <div class="flex items-center justify-between">
            <p class="text-lg font-semibold">Total</p>
            <p class="text-lg font-semibold">$ {{ totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HeartIcon as SolidIcon } from "@heroicons/vue/24/solid";

import { getCountry } from "~/utils/countries";

const SvgsCamping = resolveComponent("SvgsCamping");
const SvgsSnow = resolveComponent("SvgsSnow");
const SvgsDiamond = resolveComponent("SvgsDiamond");
const SvgsSki = resolveComponent("SvgsSki");
const SvgsCastle = resolveComponent("SvgsCastle");
const SvgsApartment = resolveComponent("SvgsApartment");
const SvgsVilla = resolveComponent("SvgsVilla");
const SvgsBeach = resolveComponent("SvgsBeach");

let { fetchSingleList, useSingleItem } = useFetch();
const range = ref({ start: new Date(), end: new Date() });

const attributes = reactive([
  {
    highlight: {
      start: { fillMode: "outline" },
      base: { fillMode: "light" },
      end: { fillMode: "outline" },
    },
    dates: { ...range },
  },
]);

const categories = [
  {
    label: "Beach",
    icon: SvgsBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Modern",
    icon: SvgsVilla,
    description: "This property is modern!",
  },
  {
    label: "Apartment",
    icon: SvgsApartment,
    description: "This property is in the apartment!",
  },

  {
    label: "Lake",
    icon: SvgsCamping,
    description: "This property is near a lake!",
  },

  {
    label: "Castles",
    icon: SvgsCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Ski",
    icon: SvgsSki,
    description: "This property is an ancient Ski!",
  },

  {
    label: "Camping",
    icon: SvgsCamping,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: SvgsSnow,
    description: "This property is in arctic environment!",
  },

  {
    label: "Lux",
    icon: SvgsDiamond,
    description: "This property is brand new and luxurious!",
  },
];

let { addLikeDislike } = useProduct();

let { useUser } = useAuth();

let { addReserving } = useReserving();

let route = useRoute();

onMounted(async () => {
  await fetchSingleList(route?.params?.id as string);
});

let pageData = computed(() => {
  return useSingleItem.value?.data;
});

let countryItem = computed(() => {
  return getCountry(pageData.value?.locationValue);
});

let iconName = computed(() => {
  return categories.filter((item: any) => {
    return item.label === pageData.value?.category;
  })[0];
});

let isLiked = computed(() => {
  return useUser?.value?.favoriteIds?.some(
    (item: string) => item === pageData.value?.id
  );
});

const handleLike = () => {
  addLikeDislike(pageData?.value?.id as string, route.fullPath);
};

let totalPrice = computed(() => {
  let firstDay = Date.parse(range.value?.start.toDateString());
  let endDate = Date.parse(range.value?.end.toDateString());
  return Math.round((endDate - firstDay) / 1000 / 60 / 60 / 24);
});

const handleReserving = async () => {
  await addReserving({
    id: pageData.value?.id,
    startDate: range.value?.start,
    endDate: range.value?.end,
    totalPrice: totalPrice.value,
  });
};
</script>
<style>
.vc-time-picker {
  display: none;
}
</style>
