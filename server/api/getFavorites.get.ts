import prisma from "../db/prisma";
export default defineEventHandler(async (event) => {
  let user = event.context.auth;
  try {
    let data = await prisma.listing.findMany({
      where: {
        id: {
          in: user.favoriteIds.map((item: any) => item),
        },
      },
    });
    return {
      favoritesList: data,
    };
  } catch (err: any) {
    throw createError({ message: err.message });
  }
});
