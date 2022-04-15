import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/apiResponse";
import ApplicationError from "../../interfaces/applicationError";
import { ITask } from "../../interfaces/task.interface";
import getTaskByUserService from "../../services/taks/getTasksByUserService";

const getTasksByUserController = async (
  req: Request<{ userId: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.headers;
    const response = await getTaskByUserService(userID as string);
    new ResponseApi<ITask[]>({ data: response, message: "Tasks" }).sendSuccess(
      res
    );
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.mesagge, error.errorType)
    );
  }
};

export default getTasksByUserController;
