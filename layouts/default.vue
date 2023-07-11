<template>
  <div class="flex flex-col gap-3 mb-3">
    <header class="py-3 px-4 border-b h-[4.5rem]">
      <div
        class="max-w-7xl mx-auto flex items-center gap-4 md:justify-between h-full"
      >
        <img
          src="./../assets//logo.png"
          alt="logo"
          class="w-24 cursor-pointer object-contain"
        />
        <NavbarOptions />
        <NavbarRight />
      </div>
    </header>
    <Modals>
      <template v-if="modalToggle == 'Register'">
        <ModalsRegister />
      </template>
      <template v-else-if="modalToggle == 'Login'">
        <ModalsLogin />
      </template>
      <template v-else-if="modalToggle == 'addItem'">
        <ModalsAddItem />
      </template>
    </Modals>
    <QueryOptions />
  </div>
  <slot></slot>
</template>
<script setup lang="ts">
let { modalToggle } = useVars();
</script>
<style>
html {
  font-family: "Poppins", sans-serif;
}
</style>
