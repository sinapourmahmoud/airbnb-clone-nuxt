import prisma from "../db/prisma";
export default async (userId: string) => {
  return await prisma.refreshToken.findFirst({
    where: {
      userId,
    },
  });
};
