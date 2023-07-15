import prisma from "../../db/prisma";
export default defineEventHandler(async (event) => {
  let param = event.context.params?.id;
  let user = event.context.auth;
  try {
    let deleteItem = await prisma.reservation.deleteMany({
      where: {
        id: param,
        AND: [
          {
            id: param,
            userId: user?.id,
          },
        ],
      },
    });
    return {
      delete: "done",
    };
  } catch (err: any) {
    throw createError({ statusCode: 500, message: err.message });
  }
});
