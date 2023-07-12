import { User } from "@prisma/client";
import prisma from "../../db/prisma";
export default defineEventHandler(async (event) => {
  let param = event.context.params?.id;
  try {
    let data = await prisma.listing.findFirst({
      where: {
        id: param,
      },
      include: {
        user: true,
        reservations: true,
      },
    });
    console.log(data);
    return {
      data: {
        ...data,
        user: userTransformer(data?.user as User),
      },
    };
  } catch (err: any) {
    throw createError({ statusCode: 500, message: "something went wrong" });
  }
});
