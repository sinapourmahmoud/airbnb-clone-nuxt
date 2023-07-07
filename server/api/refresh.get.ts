import { docodeRefreshToken, generateToken } from "../utils/generateToken";
import getUserById from "../utils/getUserById";
import getRefreshToken from "./../utils/getRefreshToken";
export default defineEventHandler(async (event) => {
  let getRefreshTokenCookie = getCookie(event, "refresh_token");
  if (!getRefreshTokenCookie) {
    throw createError({
      statusCode: 500,
      statusMessage: "not have refresh token",
    });
  }
  try {
    let getRefreshTokenDB = await getRefreshToken(getRefreshTokenCookie);
    if (!getRefreshTokenDB) {
      throw createError({
        statusCode: 401,
        statusMessage: "Refresh token is not be used in database",
      });
    }
    let decodingRefreshtoken = await docodeRefreshToken(
      getRefreshTokenDB?.token
    );
    if (!decodingRefreshtoken) {
      throw createError({
        statusCode: 500,
        statusMessage: "refreshtoken has not decoded",
      });
    }
    let getUser = await getUserById(decodingRefreshtoken?.userId);
    if (!getUser) {
      throw createError({ statusCode: 500, statusMessage: "user not fined" });
    }
    let { access } = await generateToken(decodingRefreshtoken?.userId);
    return {
      accessToken: access,
    };
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: err.message,
    });
  }
});
