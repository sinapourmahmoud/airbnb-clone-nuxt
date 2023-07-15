import prisma from "../db/prisma";
import human from "human-date";
import { reservationTrandformer } from "../utils/transformer";

export default defineEventHandler(async (event) => {
  let user = event.context.auth;
  try {
    let findReservations = await prisma.reservation.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        listing: true,
      },
    });
    return {
      items: reservationTrandformer(findReservations),
    };
  } catch (err: any) {
    throw createError({ statusCode: 500, message: err.message });
  }
});
