import { defineStore } from "pinia";

type ItemType =
  | "category"
  | "locationValue"
  | "roomCount"
  | "guestCount"
  | "bathroomCount"
  | "imageSrc"
  | "description"
  | "price"
  | "title";

export const useItems = defineStore({
  id: "item-store",
  state: () => {
    return {
      list: {
        category: "",
        locationValue: "",
        roomCount: 1,
        guestCount: 1,
        bathroomCount: 1,
        imageSrc: "",
        description: "",
        title: "",
        price: 1,
      },
    };
  },
  actions: {
    addItem(item: ItemType, value: string | number) {
      this.list = {
        ...this.list,
        [item]: value,
      };
    },
    reset() {
      this.list = {
        category: "",
        locationValue: "",
        roomCount: 1,
        guestCount: 1,
        bathroomCount: 1,
        imageSrc: "",
        description: "",
        title: "",
        price: 1,
      };
    },
  },
});
