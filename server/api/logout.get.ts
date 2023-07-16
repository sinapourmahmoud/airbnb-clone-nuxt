import prisma from "../db/prisma";
export default defineEventHandler(async (event) => {
  let cookie = getCookie(event, "refresh_token");
  let deletecookieItem = deleteCookie(event, "refresh_token");
  try {
    let deleteToken = await prisma.refreshToken.delete({
      where: {
        token: cookie,
      },
    });
    return {
      done: "yes",
    };
  } catch (err: any) {
    throw createError({ message: err.message, statusCode: 500 });
  }
});
