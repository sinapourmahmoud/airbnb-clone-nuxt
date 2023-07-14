export default () => {
  let useFetchingData = useState("useFetchingData");
  let useFavoritesData = useState("useFavoritesData");
  let usePropertiesData = useState("usePropertiesData");
  let useSingleItem = useState<any>("useSingleItem");
  const fetchListings = async () => {
    try {
      let result = await $fetch("/api/getListings");
      useFetchingData.value = result.listings;
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const fetchSingleList = async (id: string) => {
    try {
      let result: any = await useFetchApi(`/api/getItem/${id}`, {});
      useSingleItem.value = result;
      console.log(useSingleItem.value);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const fetchFavorites = async () => {
    try {
      let result: any = await useFetchApi("/api/getFavorites", {});
      useFavoritesData.value = result?.favoritesList;
    } catch (err: any) {
      console.log(err.messsage);
    }
  };
  const fetchProperties = async () => {
    try {
      let result: any = await useFetchApi("/api/getProperties", {});
      usePropertiesData.value = result?.properties;
      console.log(usePropertiesData.value);
    } catch (err: any) {
      console.log(err.messsage);
    }
  };
  return {
    fetchProperties,
    fetchListings,
    useFetchingData,
    useFavoritesData,
    usePropertiesData,
    fetchSingleList,
    useSingleItem,
    fetchFavorites,
  };
};
