<template>
  <NuxtLayout>
    <Loading v-if="loading" />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
let { initAuth } = useAuth();
let loading = ref(true);
onMounted(async () => {
  loading.value = true;
  await initAuth();
  loading.value = false;
});
</script>
