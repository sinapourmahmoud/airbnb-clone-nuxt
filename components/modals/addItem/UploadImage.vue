<template>
  <div>
    <ModalsTitle
      title="Upload images
    "
      subTitle="Show the people the images of your place
    "
    />
    <div
      @click="openInput"
      class="flex items-center justify-center h-[60vh] rounded-xl border my-3 cursor-pointer border-black"
    >
      <PhotoIcon class="w-10" v-show="!changeValues.list.imageSrc" />
      <img
        :src="changeValues.list.imageSrc"
        alt="pictureUploaded"
        class="w-full h-full object-cover rounded-xl"
        v-show="changeValues.list.imageSrc"
      />
    </div>
    <input
      type="file"
      accept="image/*"
      hidden
      ref="inputRef"
      @change.prevent="addImage"
    />
  </div>
</template>
<script setup lang="ts">
import { PhotoIcon } from "@heroicons/vue/24/outline";
import { useItems } from "~/store/items";

let changeValues = useItems();

let inputRef = ref<HTMLInputElement | null>(null);
const openInput = () => {
  inputRef?.value?.click();
};
const addImage = (event: Event) => {
  let image = (event.target as HTMLInputElement)?.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    changeValues.addItem("imageSrc", e?.target?.result as string);
  };
  reader.readAsDataURL(image);
};
</script>
