export default () => {
  let useUser = useState<string | null>("useUser", () => null);
  let useToken = useState<string | null>("useToken", () => null);
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
  const setToken = (token: string) => {
    useToken.value = token;
  };
  const setUser = (user: string) => {
    useUser.value = user;
  };
  const initRefreshToken = async () => {
    let data = await $fetch("/api/refresh");
    return data;
  };
  const initAuth = async () => {
    let refreshToken = initRefreshToken();
    console.log(refreshToken);
    // let { data, pending } = await useFetch("/api/user");
    // let { accessToken, user } = data.value as any;
    // setToken(accessToken as string);
    // setUser(user as string);
    // return pending;
  };
  return { register, login, initAuth };
};
