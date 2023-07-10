import prisma from "./prisma";
import { AddDataType } from "../../types";

interface Items extends AddDataType {
  userId: string;
}

export default async (item: Items) => {
  return await prisma.listing.create({
    data: {
      //   bathroomCount: 5,
      //   category: "s",
      //   description: "sss",
      //   guestCount: 5,
      //   imageSrc: "ddd",
      //   locationValue: "dd",
      //   price: 6666,
      //   roomCount: 55,
      //   title: "ddd",
      //   userId: "64a6f744d9434477fd090298",
      ...item,
      price: Number(item.price),
    },
  });
};
