import { User } from "../types";

export const userTransformer = (user: User) => {
  return {
    ...user,
    hashedPassword: "security",
  };
};
