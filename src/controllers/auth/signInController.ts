import { NextFunction, Request, Response } from "express";
import ResponseApi from "../../core/apiResponse";
import ApplicationError from "../../interfaces/applicationError";
import {
  IUserLogin,
  IUserLoginResponse,
  IUserOutput,
} from "../../interfaces/user.interface";
import SignInService from "../../services/auth/signInService";
import { createToken } from "../../utils/token";

const signInController = async (
  req: Request<{}, {}, IUserLogin>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUserOutput = await SignInService(req.body);

    const result: IUserLoginResponse = {
      ...user,
      token: createToken({ userID: user.id }),
    };

    new ResponseApi<IUserLoginResponse>({
      data: result,
      message: "Login success",
    }).sendSuccess(res);
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.message, error.errorType)
    );
  }
};

export default signInController;
