import { Request, Response, NextFunction } from "express";
import ApplicationError from "../../interfaces/applicationError";
import Result from "../../interfaces/response.interface";
import { ITask } from "../../interfaces/task.interface";
import getTaskByUserService from "../../services/taks/getTasksByUserService";

const getTasksByUserController = async (
  req: Request<{ userId: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await getTaskByUserService(req.params.userId);
    res.status(200).json(new Result<ITask>(response));
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.mesagge, error.errorType)
    );
  }
};

export default getTasksByUserController;
