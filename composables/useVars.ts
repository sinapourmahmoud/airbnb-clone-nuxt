const useVars = () => {
  let dropdownToggle = useState<Boolean>("dropdownToggle", () => false);
  let modalToggle = useState<String | null>("modalToggle", () => null);
  return {
    dropdownToggle,
    modalToggle,
  };
};
export default useVars;
