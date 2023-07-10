<template>
  <FormKit
    type="select"
    name="country"
    :value="countriesList[0].label"
    v-model="input"
    input-class="w-full    outline-none border-2  h-12 p-1   rounded-lg border border-gray-400 "
  >
    <optgroup label="Select country">
      <option
        :value="country.label"
        v-for="country in countriesList"
        :key="country.value"
      >
        {{ country.label }}
      </option>
    </optgroup>
  </FormKit>
</template>
<script setup lang="ts">
import { countriesList } from "../utils/countries";
import { useItems } from "~/store/items";

let changeValue = useItems();

let input = ref("");
watch(
  () => input.value,
  (newVal: string) => {
    changeValue.addItem("locationValue", newVal);
  }
);
</script>
