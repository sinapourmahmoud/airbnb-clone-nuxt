<template>
  <FormKit
    type="select"
    name="country"
    :value="countriesList[0].label"
    v-model="items.locationValue"
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
let { items } = useCreateItem();
</script>
