export default async (token: string) => {
  return await prisma?.refreshToken.findUnique({
    where: {
      token,
    },
  });
};
