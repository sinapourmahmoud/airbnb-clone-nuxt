export default () => {
  let reservingList = useState("reservingList", () => null);
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
  const getReservations = async () => {
    try {
      let resault: any = await useFetchApi(`/api/getReservations`, {
        method: "GET",
      });

      reservingList.value = resault.items;
      console.log(resault);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const removeReservation = async (id: string) => {
    try {
      await useFetchApi(`/api/deleteReserving/${id}`, {
        method: "DELETE",
      });
      reloadNuxtApp({
        path: "/reservations",
        ttl: 1000,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { addReserving, getReservations, reservingList, removeReservation };
};
