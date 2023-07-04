<template>
  <div
    :class="`absolute -bottom-8 shadow-xl right-1 transition-all duration-300  bg-white min-w-[200px] rounded-lg h-auto ${
      props.toggle ? 'opacity-100 translate-y-44' : 'opacity-0 translate-y-56'
    }`"
  >
    <NavbarDropdownItem />
    <NavbarDropdownItem />
    <NavbarDropdownItem />
    <NavbarDropdownItem />
    <NavbarDropdownItem />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  toggle: Boolean;
}

let props = defineProps<Props>();
let emits = defineEmits<{
  (event: "changeToggle"): void;
}>();
</script>
