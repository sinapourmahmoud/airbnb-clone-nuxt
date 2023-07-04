import bcrypt from "bcrypt";
import prisma from "./prisma";
export default async (item: {
  email: String;
  name: String;
  hashedPassword: String;
}) => {
  let hashedData = await bcrypt.hash(item.hashedPassword, 10);
  return await prisma.user.create({
    data: {
      ...item,
      hashedPassword: hashedData,
    },
  });
};
