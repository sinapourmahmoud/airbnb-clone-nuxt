import { Reservation, User } from "@prisma/client";
import human from "human-date";

export const userTransformer = (user: User) => {
  return {
    ...user,
    hashedPassword: "security",
  };
};

export const reservationTrandformer = (items: Reservation[]) => {
  return items.map((item: any) => ({
    ...item,
    startDate: human.prettyPrint(new Date(item.startDate)),
    endDate: human.prettyPrint(new Date(item.endDate)),
  }));
};
