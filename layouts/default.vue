<template>
  <header class="py-3 px-4 border-b h-[4.5rem]">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-full">
      <img
        src="./../assets//logo.png"
        alt="logo"
        class="w-24 cursor-pointer object-contain"
      />
      <NavbarOptions />
      <NavbarRight />
    </div>
  </header>
  <slot></slot>
</template>
<style>
html {
  font-family: "Poppins", sans-serif;
}
</style>
