import createReservation from "../../db/createReservation";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { startDate, endDate, totalPrice } = body;
  let useContext = event.context.auth;
  let param = event.context.params?.id;
  console.log(startDate, endDate, totalPrice);

  try {
    let reservingItem = await createReservation({
      endDate,
      startDate,
      userId: useContext.id,
      totalPrice,
      listingId: param as string,
    });
    return {
      item: reservingItem,
    };
  } catch (err) {
    throw createError({ statusCode: 500, message: "something went wrong" });
  }
});
