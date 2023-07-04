import createUser from "../db/createUser";
import prisma from "../db/prisma";
import { userTransformer } from "../utils/transformer";

export default defineEventHandler(async (event) => {
  let body: any = await readBody(event);
  let { name, password, email } = body;
  if (!name || !password || !email) {
    throw createError({
      statusCode: 500,
      statusMessage: "please fillout the labels",
    });
  }
  let checkUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (checkUser) {
    throw createError({
      status: 401,
      statusMessage: "user has already loged in",
    });
  }
  try {
    let data = await createUser({
      email,
      name,
      hashedPassword: password,
    });
    return {
      user: userTransformer(data),
    };
  } catch (err: any) {
    throw createError({
      status: 500,
      statusMessage: err.message,
    });
  }
});
