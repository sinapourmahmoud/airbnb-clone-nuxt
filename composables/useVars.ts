const useVars = () => {
  let dropdownToggle = useState<Boolean>("dropdownToggle", () => false);
  return {
    dropdownToggle,
  };
};
export default useVars;
