<template>
  <div>
    <ModalsAddItemSelectCountry v-if="step === 1" />
    <VDatePicker
      v-else-if="step === 2"
      v-model.range="range"
      mode="dateTime"
      :attributes="attributes"
      class="my-calendar"
      expanded
      :min-date="new Date()"
      show-caps
      transparent
      borderless
    />
    <ModalsAddItemCounters v-else-if="step === 3" />
    <div class="flex items-center gap-3 mt-3">
      <Button
        title="Prev"
        outline
        @clicked="prevClick"
        type="button"
        :disabled="step === 1"
      />
      <Button
        :title="step === 3 ? 'Filter' : 'Next'"
        @clicked="nextClick"
        :type="'button'"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useItems } from "~/store/items";

enum STEPS {
  location = 1,
  calendar = 2,
  items = 3,
}

const changeValues = useItems();

let { modalToggle } = useVars();

const { addData } = useAddListing();

let step = ref<STEPS>(STEPS.location);

const range = ref({ start: new Date(), end: new Date() });

const attributes = reactive([
  {
    highlight: {
      start: { fillMode: "outline" },
      base: { fillMode: "light" },
      end: { fillMode: "outline" },
    },
    dates: { ...range },
  },
]);

let isOnSubmit = useState("submit", () => false);

let loading = useState("loading", () => false);
let queries = useRoute().query;

const prevClick = () => {
  if (step.value === 1) {
    return;
  }
  step.value = step.value - 1;
};
const nextClick = () => {
  console.log(range?.value);
  if (step.value === STEPS.items) {
    console.log(queries);
    useRouter().push({
      query: {
        locationValue: changeValues.list.locationValue,
        start: range.value.start,
        end: range.value.end,
        roomCount: changeValues.list.roomCount,
        bathroomCount: changeValues.list.bathroomCount,
        guestCount: changeValues.list.guestCount,
        ...queries,
      },
    });
    modalToggle.value = "";
  } else {
    step.value = step.value + 1;
  }
};
</script>
<style>
.vc-time-picker {
  display: none;
}
</style>
