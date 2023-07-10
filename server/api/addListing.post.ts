import createList from "../db/createList";
import { uploadImage } from "../utils/uploadImage";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let user: any = event.context.auth;
  try {
    if (body.imageSrc) {
      let image: any = await uploadImage(body.imageSrc);
      let addList = await createList({
        ...body,
        imageSrc: image?.secure_url,
        userId: user?.id,
      });
      return {
        list: addList,
      };
    } else {
      let addList = await createList({
        ...body,
        imageSrc: null,
        userId: user?.id,
      });
      return {
        list: addList,
      };
    }
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: err.message,
    });
  }
});
