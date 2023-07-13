export default () => {
  const addReserving = async ({
    id,
    startDate,
    endDate,
    totalPrice,
  }: {
    id: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
  }) => {
    try {
      let resault = await useFetchApi(`/api/reserve/${id}`, {
        method: "POST",
        body: {
          startDate,
          endDate,
          totalPrice,
        },
      });
      reloadNuxtApp({
        path: `/listing/${id}`,
        ttl: 1000,
      });
    } catch (err: any) {
      console.log(err);
    }
  };
  return { addReserving };
};
