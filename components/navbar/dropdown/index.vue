<template>
  <div
    :class="`absolute z-50  shadow-xl right-1 transition-all duration-300  bg-white min-w-[200px] rounded-lg h-auto ${
      props.toggle
        ? `opacity-100 visible  ${
            useUser ? 'translate-y-44' : 'translate-y-24'
          }`
        : 'opacity-0 translate-y-56 invisible'
    }`"
  >
    <NavbarDropdownItem
      title="My favorites"
      v-if="!!useUser"
      @clicked="changePage('favorites')"
    />
    <NavbarDropdownItem
      title="My reservations"
      v-if="!!useUser"
      @clicked="changePage('reservations')"
    />
    <NavbarDropdownItem
      title="My properties"
      v-if="!!useUser"
      @clicked="changePage('properties')"
    />
    <NavbarDropdownItem
      title="Airbnb your home"
      v-if="!!useUser"
      @clicked="modalToggle = 'addItem'"
    />
    <NavbarDropdownItem
      title="Logout"
      v-if="!!useUser"
      @clicked="handleLogout"
    />

    <NavbarDropdownItem title="Register" @clicked="openModal" v-else />
    <NavbarDropdownItem title="Login" @clicked="openModal" v-if="!useUser" />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  toggle: Boolean;
}
let router = useRouter();
let { modalToggle } = useVars();
let { useUser, logout } = useAuth();
let props = defineProps<Props>();
let emits = defineEmits<{
  (event: "changeToggle"): void;
}>();

const openModal = (name: String) => {
  modalToggle.value = name;
  emits("changeToggle");
};

const changePage = (url: string) => {
  router.push(`/${url}`);
};

const handleLogout = async () => {
  await logout();
  reloadNuxtApp({
    path: "/",
    ttl: 1000,
  });
};
</script>
