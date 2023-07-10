const useFetchApi = async (
  url: string,
  options: {
    headers?: object;
    method?: "GET" | "POST";
    body?: object;
  }
) => {
  let { useToken } = useAuth();
  return await $fetch(url, {
    ...options,
    method: options.method ? options.method : "GET",
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useToken.value}`,
    },
  });
};
export default useFetchApi;
