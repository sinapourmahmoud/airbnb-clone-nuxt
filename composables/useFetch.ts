export default () => {
  let useFetchingData = useState("useFetchingData");
  let useFavoritesData = useState("useFavoritesData");
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
  return {
    fetchListings,
    useFetchingData,
    useFavoritesData,
    fetchSingleList,
    useSingleItem,
    fetchFavorites,
  };
};
