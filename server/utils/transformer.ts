import { User } from "@prisma/client";

export const userTransformer = (user: User) => {
  return {
    ...user,
    hashedPassword: "security",
  };
};
