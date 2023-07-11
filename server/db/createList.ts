import prisma from "./prisma";
import { AddDataType } from "../../types";

interface Items extends AddDataType {
  userId: string;
}

export default async (item: Items) => {
  return await prisma.listing.create({
    data: {
      ...item,
      price: Number(item.price),
    },
  });
};
