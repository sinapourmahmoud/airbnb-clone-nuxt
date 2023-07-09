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
        :count="items.roomCount"
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
        :count="items.bathroomCount"
      />
      <ModalsAddItemCounterItem
        composable="guestCount"
        title="Guests"
        subtitle="how many guests should have ?
            
      "
        @plus="plusItem"
        @min="minItem"
        :count="items.guestCount"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
type LabelOptions = "roomCount" | "bathroomCount" | "guestCount";
let { items } = useCreateItem();
const plusItem = (label: LabelOptions) => {
  items[label] = items[label] + 1;
};
const minItem = (label: LabelOptions) => {
  if (items[label] === 0) {
    return;
  }
  items[label] = items[label] - 1;
};
</script>
