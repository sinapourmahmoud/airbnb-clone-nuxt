<template>
  <div class="flex flex-col gap-4">
    <ModalsTitle title="Categories" sub-title="Please select category" />
    <div class="max-h-[50vh] overflow-y-auto grid grid-cols-2 gap-1">
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectOption(category.label)"
        class="cursor-pointer flex items-center flex-col border gap-2 py-3 rounded-xl transition-all duration-300"
        :class="props.category === category.label && 'border-black'"
      >
        <component :is="category.icon"></component>
        <h2>{{ category.label }}</h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  category: string;
}

let props = defineProps<Props>();

let emits = defineEmits<{
  (event: "changeCategory", title: "category", value: string): void;
}>();
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

const selectOption = (label: string) => {
  emits("changeCategory", "category", label);
};
</script>
