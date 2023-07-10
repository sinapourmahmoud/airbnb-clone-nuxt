<template>
  <div>
    <FormKit type="form" @submit="handleSubmit" :actions="false">
      <ModalsAddItemCategories v-if="step === 1" />
      <ModalsAddItemSelectCountry v-else-if="step === 2" />
      <ModalsAddItemCounters v-else-if="step === 3" />
      <ModalsAddItemUploadImage v-else-if="step === 4" />
      <ModalsAddItemInfo v-else-if="step === 5" />
      <div class="flex items-center gap-3 mt-3">
        <Button
          title="Prev"
          outline
          @clicked="prevClick"
          type="button"
          :disabled="step === 1"
        />
        <Button
          title="Next"
          @clicked="nextClick"
          type="text"
          v-show="step !== 5"
        />
        <Button title="Submit" type="submit" v-show="step === 5" />
      </div>
    </FormKit>
  </div>
</template>
<script setup lang="ts">
import { useItems } from "~/store/items";

enum STEPS {
  category = 1,
  location = 2,
  items = 3,
  image = 4,
  info = 5,
}

const changeValues = useItems();

const { addData } = useAddListing();

let step = ref<STEPS>(STEPS.category);
let isOnSubmit = useState("submit", () => false);

const prevClick = () => {
  if (step.value === 1) {
    return;
  }
  step.value = step.value - 1;
};
const nextClick = () => {
  if (step.value === STEPS.info) {
    return;
  } else {
    step.value = step.value + 1;
  }
};

const handleSubmit = (e: any) => {
  if (step.value === STEPS.info) {
    changeValues.addItem("title", e.title);
    changeValues.addItem("description", e.description);
    addData(changeValues.list);
  }
};
</script>
