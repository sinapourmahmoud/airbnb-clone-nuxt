export default () => {
  const addLikeDislike = async (id: string, redirectUrl = "/") => {
    try {
      let data = await useFetchApi(`/api/likeDislike/${id}`, {});

      reloadNuxtApp({
        path: redirectUrl,
        ttl: 1000,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { addLikeDislike };
};
