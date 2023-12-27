import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generalAccessToken = (payload) => {
  const accessToken = jwt.sign(
    { _id: payload._id, role_name: payload.role_name },
    process.env.JWT_ACCESS_TOKEN,
    {
      expiresIn: "7d",
    }
  );
  return accessToken;
};

export const generalRefreshToken = (payload) => {
  const refreshToken = jwt.sign(
    { _id: payload._id, role_id: payload.role_id, slug: payload.slug },
    process.env.JWT_REFRESH_TOKEN,
    {
      expiresIn: "365d",
    }
  );
  return refreshToken;
};
