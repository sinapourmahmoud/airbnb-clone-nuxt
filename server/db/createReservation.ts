import prisma from "./prisma";
export default async ({
  endDate,
  startDate,
  userId,
  totalPrice,
  listingId,
}: {
  endDate: Date;
  startDate: Date;
  userId: string;
  totalPrice: number;
  listingId: string;
}) => {
  return await prisma.reservation.create({
    data: {
      endDate,
      startDate,
      userId,
      totalPrice,
      listingId,
    },
  });
};
