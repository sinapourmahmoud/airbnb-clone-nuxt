<template>
  <div class="flex flex-col gap-3">
    <ModalsTitle
      title="Share some basics about the place
  "
      sub-title="Select bext options?
  "
    />
    <div class="flex flex-col gap-5">
      <ModalsAddItemCounterItem
        composable="roomCount"
        title="Rooms"
        subtitle="how many rooms should have ?
  
      "
        :count="changeValues.list.roomCount"
        @plus="plusItem"
        @min="minItem"
      />
      <ModalsAddItemCounterItem
        composable="bathroomCount"
        title="Bathrooms"
        subtitle="how many bathrooms should have ?
        
        "
        @plus="plusItem"
        @min="minItem"
        :count="changeValues.list.bathroomCount"
      />
      <ModalsAddItemCounterItem
        composable="guestCount"
        title="Guests"
        subtitle="how many guests should have ?
            
      "
        @plus="plusItem"
        @min="minItem"
        :count="changeValues.list.guestCount"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useItems } from "~/store/items";

let changeValues = useItems();

type LabelOptions = "roomCount" | "bathroomCount" | "guestCount";
const plusItem = (label: LabelOptions) => {
  changeValues.addItem(label, changeValues.list[label] + 1);
};
const minItem = (label: LabelOptions) => {
  changeValues.addItem(label, changeValues.list[label] - 1);
};
</script>
