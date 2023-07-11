export default () => {
  const addLikeDislike = async (id: string) => {
    try {
      let data = await useFetchApi(`/api/likeDislike/${id}`, {});
      reloadNuxtApp({
        path: "/",
        ttl: 1000,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { addLikeDislike };
};
