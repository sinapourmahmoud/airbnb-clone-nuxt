const useCreateItem = () => {
  let items = reactive({
    category: "",
    locationValue: "",
    roomCount: 1,
    guestCount: 1,
    bathroomCount: 1,
  });
  // let useCategory = useState<string | null>("useCategory", () => null);
  // let useCountryLocation = useState<string | null>(
  //   "useCountryLocation",
  //   () => null
  // );
  // let useRoomCount = useState<number | null>("useRoomCount", () => 1);
  // let useBathroomCount = useState<number | null>("useBathroomCount", () => 1);
  // let useGuestCount = useState<number | null>("useGuestCount", () => 1);
  return {
    items,
  };
};
export default useCreateItem;
