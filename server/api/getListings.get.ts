import prisma from "../db/prisma";
export default defineEventHandler(async (event) => {
  console.log("my data");
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
    checkData.bathroomCount = Number(bathroomCount);
  }
  if (guestCount) {
    checkData.guestCount = Number(guestCount);
  }
  if (locationValue) {
    checkData.locationValue = locationValue;
  }
  if (roomCount) {
    checkData.roomCount = Number(roomCount);
  }
  if (end && start) {
    checkData.reservations = {
      some: {
        OR: [
          {
            startDate: { gte: start as Date },
            endDate: { gte: end as Date },
          },
          {
            startDate: { lte: start as Date },
            endDate: { lte: end as Date },
          },
        ],
      },
    };
  }
  console.log(checkData);
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
