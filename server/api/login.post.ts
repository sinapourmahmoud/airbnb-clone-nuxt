import prisma from "../db/prisma";
import createRefreshToken from "../utils/createRefreshToken";
import { generateToken } from "../utils/generateToken";
import saveRefreshToken from "../utils/saveRefreshToken";

export default defineEventHandler(async (event) => {
  let body: any = await readBody(event);
  let { email, password } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 500,
      statusMessage: "Invalid data",
    });
  }
  let checkUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!checkUser) {
    throw createError({
      statusCode: 500,
      statusMessage: "user has not register",
    });
  }
  try {
    let { access, refresh } = await generateToken(checkUser?.id as String);
    let addRefreshToken = await createRefreshToken({
      userId: checkUser.id as string,
      token: refresh,
    });
    let refreshTokenCookie = saveRefreshToken(event, refresh as string);

    return { user: userTransformer(checkUser), token: access };
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: err.message,
    });
  }
});
