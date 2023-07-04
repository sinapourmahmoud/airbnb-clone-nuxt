<template>
  <div
    :class="`absolute  shadow-xl right-1 transition-all duration-300  bg-white min-w-[200px] rounded-lg h-auto ${
      props.toggle ? 'opacity-100 translate-y-24' : 'opacity-0 translate-y-56'
    }`"
  >
    <NavbarDropdownItem title="Register" @clicked="openModal" />
    <NavbarDropdownItem title="Login" @clicked="openModal" />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  toggle: Boolean;
}
let { modalToggle } = useVars();
let props = defineProps<Props>();
let emits = defineEmits<{
  (event: "changeToggle"): void;
}>();

const openModal = (name: String) => {
  modalToggle.value = name;
  emits("changeToggle");
};
</script>
