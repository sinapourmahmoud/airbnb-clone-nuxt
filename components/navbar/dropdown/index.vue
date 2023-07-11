<template>
  <div
    :class="`absolute z-50  shadow-xl right-1 transition-all duration-300  bg-white min-w-[200px] rounded-lg h-auto ${
      props.toggle
        ? `opacity-100  ${useUser ? 'translate-y-52' : 'translate-y-24'}`
        : 'opacity-0 translate-y-56'
    }`"
  >
    <NavbarDropdownItem title="My trips" v-if="!!useUser" />
    <NavbarDropdownItem title="My favorites" v-if="!!useUser" />
    <NavbarDropdownItem title="My reservations" v-if="!!useUser" />
    <NavbarDropdownItem title="My properties" v-if="!!useUser" />
    <NavbarDropdownItem title="Airbnb your home" v-if="!!useUser" />
    <NavbarDropdownItem title="Logout" v-if="!!useUser" />

    <NavbarDropdownItem title="Register" @clicked="openModal" v-else />
    <NavbarDropdownItem title="Login" @clicked="openModal" v-if="!useUser" />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  toggle: Boolean;
}
let { modalToggle } = useVars();
let { useUser } = useAuth();
let props = defineProps<Props>();
let emits = defineEmits<{
  (event: "changeToggle"): void;
}>();

const openModal = (name: String) => {
  modalToggle.value = name;
  emits("changeToggle");
};
</script>
