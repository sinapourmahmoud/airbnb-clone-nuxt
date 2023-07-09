const useCreateItem = () => {
  let useCategory = useState<string | null>("useCategory", () => null);
  let useCountryLocation = useState<string | null>(
    "useCountryLocation",
    () => null
  );
  return { useCategory, useCountryLocation };
};
export default useCreateItem;
