import prisma from "../db/prisma";
export default defineEventHandler(async (event) => {
  try {
    let data = await prisma.listing.findMany({});
    return { listings: data };
  } catch (err: any) {
    throw createError({ statusCode: 500, message: "something went wrong" });
  }
});
