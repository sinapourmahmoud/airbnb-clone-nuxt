<template>
  <div class="flex flex-col gap-4">
    <ModalsTitle
      title="how would you describe your place
    "
      subTitle="short and sweet works the best
    "
    />
    <Input
      id="title"
      name="title"
      label="Title"
      type="text"
      validation="required|length:5,255"
      placeholder="Enter Title"
    />
    <Input
      id="description"
      name="description"
      label="Description"
      type="text"
      validation="required|length:5,255"
      placeholder="Enter Description"
    />
    <Input
      id="price"
      name="price"
      label="Price"
      type="number"
      validation="required|number|min:1"
      placeholder="Enter Price"
      value="1"
    />
  </div>
</template>
<script setup lang="ts"></script>
