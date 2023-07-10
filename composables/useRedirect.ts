export default () => {
  let router = useRouter();
  const redirectQuery = (item: object) => {
    router.push({
      path: "/",
      query: { ...item },
    });
  };
  return { redirectQuery };
};
