import { Listing } from "@prisma/client";

import prisma from "../../db/prisma";
export default defineEventHandler(async (event) => {
  let param = event?.context?.params?.id;
  let isLikes = event.context.auth.favoriteIds.some(
    (item: string) => item === param
  );
  try {
    if (isLikes) {
      let findItem = event.context.auth.favoriteIds.filter(
        (item: string) => item !== param
      );
      let item = await prisma.user.update({
        where: {
          id: event.context.auth.id,
        },
        data: {
          favoriteIds: [...findItem],
        },
      });
      return {
        response: "ok",
      };
    } else {
      let item = await prisma.user.update({
        where: {
          id: event.context.auth.id,
        },
        data: {
          favoriteIds: [...event.context.auth.favoriteIds, param],
        },
      });
      return {
        response: "ok",
      };
    }
  } catch (err: any) {
    throw createError({ statusCode: 500, message: err.message });
  }
});
