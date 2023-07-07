const useFetchApi = async (
  url: string,
  options: {
    headers?: object;
  }
) => {
  let { useToken } = useAuth();
  return await $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useToken.value}`,
    },
  });
};
export default useFetchApi;
