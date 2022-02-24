import { Response, Request, NextFunction } from "express";
import ApplicationError from "../../interfaces/applicationError";
import { IUser } from "../../interfaces/user.interface";
import createNewUserService from "../../services/auth/registerService";

const registerController = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createNewUserService(req.body);
    res.status(201).json(newUser);
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.message, error.errorType)
    );
  }
};

export default registerController;
