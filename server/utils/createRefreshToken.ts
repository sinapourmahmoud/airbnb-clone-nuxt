import prisma from "../db/prisma";

export default async (item: { userId: string; token: string }) => {
  return await prisma.refreshToken.create({
    data: {
      ...item,
    },
  });
};
