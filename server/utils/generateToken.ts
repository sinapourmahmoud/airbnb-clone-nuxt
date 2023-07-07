import jwt from "jsonwebtoken";
export const generateAccessToken = async (id: String) => {
  let config = useAppConfig();

  return await jwt.sign({ userId: id }, config.jwtAccessToken, {
    expiresIn: "10m",
  });
};
export const generateRefreshToken = async (id: String) => {
  let config = useAppConfig();
  return await jwt.sign({ userId: id }, config.jwtRefreshToken, {
    expiresIn: "4h",
  });
};

export const decodeAccessToken = async (token: string) => {
  let config = useAppConfig();

  return await jwt.verify(token, config?.jwtAccessToken);
};

export const docodeRefreshToken = async (token: string) => {
  let config = useAppConfig();

  return await jwt.verify(token, config?.jwtRefreshToken);
};

export const generateToken = async (id: String) => {
  let access = await generateAccessToken(id);
  let refresh = await generateRefreshToken(id);
  return {
    access,
    refresh,
  };
};
