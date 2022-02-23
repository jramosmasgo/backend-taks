import { Response, Request, NextFunction } from "express";
import ApplicationError from "../../interfaces/applicationError";
import Result from "../../interfaces/response.interface";
import { IUser } from "../../interfaces/user.interface";
import getAllUserService from "../../services/user/getAllUsersService";

const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: IUser[] = await getAllUserService();
    res.status(200).json(new Result<IUser[]>(users));
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.message, error.errorType)
    );
  }
};

export default getAllUsersController;
