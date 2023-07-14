import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/generateToken";
export default defineEventHandler(async (event) => {
  const query = getRequestURL(event).pathname;
  let endpoints = [
    "/api/user",
    "/api/addListing",
    "/api/likeDislike/:id",
    "/api/reserve/:id",
    "/api/getReservations",
    "/api/deleteReserving/:id",
  ];
  let mathcedEndpoint = endpoints.some((endPoint) => {
    let item = new UrlPattern(endPoint);
    return item.match(query);
  });
  if (mathcedEndpoint) {
    let authToken = event.req.headers["authorization"]?.split(" ")[1];
    if (!authToken) {
      throw createError({
        statusCode: 400,
        statusMessage: "no authorization code",
      });
    }
    let decodeCode = await decodeAccessToken(authToken);
    if (!decodeCode) {
      throw createError({
        statusCode: 401,
        statusMessage: "decode was undefined",
      });
    }
    let findUser = await getUserById(decodeCode.userId);
    if (!findUser) {
      throw createError({ statusCode: 401, statusMessage: "user not find" });
    }
    event.context.auth = findUser;
  }
});
