export default () => {
  const register = async (name: String, password: String, email: String) => {
    let { data, pending } = await useFetch("/api/register", {
      method: "POST",
      body: {
        name,
        password,
        email,
      },
    });
    return data;
  };
  return { register };
};
