<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
let { initAuth } = useAuth();
onMounted(async () => {
  await initAuth();
});
</script>
