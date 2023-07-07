import { User } from "@prisma/client";
import { CustomUser } from "types";

export default () => {
  let useUser = useState<CustomUser | null>("useUser", () => null);
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
    setToken(data?.value?.token as string);
    setUser(data?.value?.user as CustomUser);
  };
  const setToken = (token: string) => {
    useToken.value = token;
  };
  const setUser = (user: CustomUser) => {
    useUser.value = user;
  };
  const initRefreshToken = async () => {
    try {
      let result = await $fetch("/api/refresh", {
        method: "GET",
      });
      setToken(result.accessToken);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const initUser = async () => {
    try {
      let result: any = await useFetchApi("/api/user", {});
      setUser(result.user);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const initAuth = async () => {
    let refreshToken = await initRefreshToken();
    let user = await initUser();
    // let { data, pending } = await useFetch("/api/user");
    // let { accessToken, user } = data.value as any;
    // setToken(accessToken as string);
    // setUser(user as string);
    // return pending;
  };
  return { register, login, initAuth, useUser, useToken };
};
