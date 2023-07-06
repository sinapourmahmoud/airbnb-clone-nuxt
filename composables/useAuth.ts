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
  const login = async (password: String, email: String) => {
    let { data, pending } = await useFetch("/api/login", {
      method: "POST",
      body: {
        password,
        email,
      },
    });
    return data;
  };
  return { register, login };
};
