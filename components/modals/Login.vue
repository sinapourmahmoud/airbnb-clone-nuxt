<template>
  <div>
    <ModalsTitle
      title="Welcome back"
      class="my-4"
      subTitle="Login to your account"
    />

    <div class="my-5">
      <FormKit type="form" @submit="handleSubmit" :actions="false">
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          validation="required|email|length:5,255"
          placeholder="Enter Email"
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          validation="required|password|length:5,255"
          placeholder="Enter Password"
        />
        <Button type="submit" title="Login" :disabled="loading"></Button>
      </FormKit>
    </div>
  </div>
</template>
<script setup lang="ts">
let { login } = useAuth();
let { modalToggle } = useVars();
let loading = ref(false);
const handleSubmit = async (event: any) => {
  loading.value = true;
  let result = await login(event.password, event.email);
  loading.value = false;
  modalToggle.value = null;
};
</script>
