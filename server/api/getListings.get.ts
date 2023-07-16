import prisma from "../db/prisma";
export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  let {
    category,
    bathroomCount,
    end,
    guestCount,
    locationValue,
    roomCount,
    start,
  } = query;

  let checkData: any = {};
  if (category) {
    checkData.category = category;
  }
  if (bathroomCount) {
    checkData.bathroomCount = {
      gte: Number(bathroomCount),
    };
  }
  if (guestCount) {
    checkData.guestCount = {
      gte: Number(guestCount),
    };
  }
  if (locationValue) {
    checkData.locationValue = locationValue;
  }
  if (roomCount) {
    checkData.roomCount = {
      gte: Number(roomCount),
    };
  }
  // if (end && start) {
  //   checkData.NOT = {
  //     reservations: {
  //       some: {
  //         OR: [
  //           {
  //             startDate: { lte: start },
  //             endDate: { gte: start },
  //           },
  //           {
  //             startDate: { lte: end },
  //             endDate: { gte: end },
  //           },
  //         ],
  //       },
  //     },
  //   };
  // }
  try {
    let data = await prisma.listing.findMany({
      where: {
        ...checkData,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return { listings: data };
  } catch (err: any) {
    throw createError({ statusCode: 500, message: err.message });
  }
});
