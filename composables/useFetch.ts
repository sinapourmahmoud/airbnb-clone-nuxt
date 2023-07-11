export default () => {
  let useFetchingData = useState("useFetchingData");
  const fetchListings = async () => {
    try {
      let result = await $fetch("/api/getListings");
      useFetchingData.value = result.listings;
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { fetchListings, useFetchingData };
};
