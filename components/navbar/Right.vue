<template>
  <div class="flex items-center gap-6 relative">
    <p
      class="font-medium text-base hidden md:block cursor-pointer"
      @click="addAirbnb"
    >
      Airbnb your home
    </p>
    <div
      @click.prevent="changeToggle"
      class="border cursor-pointer transition-all duration-300 hover:shadow-lg p-2 md:p-1 md:px-2 rounded-full flex items-center gap-3"
    >
      <Bars3Icon class="w-6" />
      <img
        :src="
          useUser?.image != null
            ? useUser.image
            : './../../assets//placeholder.jpg'
        "
        alt="profile"
        class="w-10 h-10 rounded-full hidden md:block"
      />
    </div>
    <NavbarDropdown :toggle="toggle" @changeToggle="changeToggle" />
  </div>
</template>
<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
let { useUser } = useAuth();
let { dropdownToggle, modalToggle } = useVars();
let toggle = dropdownToggle;
const changeToggle: () => void = () => {
  toggle.value = !toggle.value;
};
const addAirbnb = () => {
  if (!useUser.value) {
    modalToggle.value = "Login";
  } else {
    modalToggle.value = "addItem";
  }
};
</script>
