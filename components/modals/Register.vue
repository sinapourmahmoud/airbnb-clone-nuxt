<template>
  <div class="my-3">
    <ModalsTitle title="Wellcome to Airbnb" subTitle="Create account" />

    <div class="my-5">
      <FormKit type="form" @submit="handleSubmit" :actions="false">
        <Input
          id="name"
          name="name"
          label="Name"
          type="text"
          validation="required|length:5,255"
          placeholder="Enter Name"
        />
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
        <Button type="submit" title="Register" :disabled="loading"></Button>
      </FormKit>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
let { register } = useAuth();
let { modalToggle } = useVars();
let loading = ref(false);
const handleSubmit = async (event: any) => {
  loading.value = true;
  let result = await register(event.name, event.password, event.email);
  loading.value = false;
  modalToggle.value = "Login";
};
</script>
