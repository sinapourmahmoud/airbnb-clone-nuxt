<template>
  <div
    class="max-w-6xl mx-auto flex items-center justify-between w-full px-4 gap-4 overflow-x-auto"
  >
    <div
      v-for="(category, index) in categories"
      :key="index"
      @click="redirectQuery({ category: category.label })"
      class="relative pb-2 cursor-pointer flex flex-col items-center"
    >
      <component
        :is="category.icon"
        class="w-9"
        :class="
          checkCategory === category.label ? 'fill-black' : 'fill-gray-500'
        "
      ></component>
      <h3
        class="font-light"
        :class="
          checkCategory === category.label ? 'text-black' : 'text-gray-500'
        "
      >
        {{ category.label }}
      </h3>
      <div
        class="absolute inset-x-0 h-1 w-full bottom-0"
        :class="checkCategory === category.label && 'bg-black'"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const SvgsCamping = resolveComponent("SvgsCamping");
const SvgsSnow = resolveComponent("SvgsSnow");
const SvgsDiamond = resolveComponent("SvgsDiamond");
const SvgsSki = resolveComponent("SvgsSki");
const SvgsCastle = resolveComponent("SvgsCastle");
const SvgsApartment = resolveComponent("SvgsApartment");
const SvgsVilla = resolveComponent("SvgsVilla");
const SvgsBeach = resolveComponent("SvgsBeach");
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

let { redirectQuery } = useRedirect();
let route = useRoute();

let checkCategory = computed(() => {
  return route.query.category;
});
</script>
