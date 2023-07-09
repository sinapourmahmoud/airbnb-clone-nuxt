<template>
  <div class="my-4 flex flex-col gap-3">
    <ModalsAddItemCategories v-show="step === 1" />
    <ModalsAddItemSelectCountry v-show="step === 2" />
    <ModalsAddItemCounters v-show="step === 3" />
    <div class="flex items-center gap-3">
      <Button
        title="Prev"
        outline
        @clicked="prevClick"
        type="button"
        :disabled="step === 1"
      />
      <Button title="Next" @clicked="nextClick" type="button" />
    </div>
  </div>
</template>
<script setup lang="ts">
enum STEPS {
  category = 1,
  location = 2,
  items = 3,
  image = 4,
  description = 5,
}

let step = ref<STEPS>(STEPS.category);

const prevClick = () => {
  if (step.value === 1) {
    return;
  }
  step.value = step.value - 1;
};
const nextClick = () => {
  if (step.value === STEPS.description) {
    return;
  }
  step.value = step.value + 1;
};
</script>
