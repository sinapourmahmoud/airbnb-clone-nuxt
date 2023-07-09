import { v2 as _cloudinary } from "cloudinary";

const cloudinary = () => {
  let appConfig = useAppConfig();
  _cloudinary.config({
    cloud_name: appConfig.appCloudName,
    api_key: appConfig.appApiKey,
    api_secret: appConfig.appApiSecret,
  });
  return _cloudinary;
};

export const uploadImage = (image: string) => {
  new Promise((resolve, reject) => {
    cloudinary().uploader.upload(image, (err: any, data: any) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
