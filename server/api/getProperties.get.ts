import prisma from "../db/prisma";
import { reservationTrandformer } from "../utils/transformer";
export default defineEventHandler(async (event) => {
  let user = event.context.auth;

  try {
    let getProperties = await prisma.reservation.findMany({
      where: {
        listing: {
          userId: user.id,
        },
      },
      include: {
        listing: true,
      },
    });
    return {
      properties: reservationTrandformer(getProperties),
    };
  } catch (err: any) {
    throw createError({ statusCode: 500, message: err.message });
  }
});
