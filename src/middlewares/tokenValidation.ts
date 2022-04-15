import { Response, Request, NextFunction } from "express";
import ApplicationError from "../interfaces/applicationError";
import { validateToken } from "../utils/token";

const tokenValidation = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return next(
        new ApplicationError(401, "No token provided", "Token Error")
      );
    }

    const response = validateToken(authorization.replace("Bearer ", ""));

    if (!response.userID) {
      console.log(response);
      return next(
        new ApplicationError(401, "Invalid Tokennnnn", "Token Error")
      );
    }

    req.headers.userID = response.userID;
    next();
  } catch (error: any) {
    console.log(error);
    if (error.message == "jwt expired")
      return next(new ApplicationError(401, error.message, "Token Error"));
    next(error);
  }
};

export default tokenValidation;
