import jwt, { UserIdJwtPayload } from "jsonwebtoken";

export const createToken = (payload: Object): string =>
  jwt.sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: "30m",
  });

export const validateToken = (token: string): jwt.UserIdJwtPayload => {
  const result = jwt.verify(
    token,
    `${process.env.JWT_SECRET}`
  ) as UserIdJwtPayload;
  return result;
};
