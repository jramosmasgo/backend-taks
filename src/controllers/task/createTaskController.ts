import { Response, Request, NextFunction } from "express";
import ApplicationError from "../../interfaces/applicationError";
import Result from "../../interfaces/response.interface";
import { ITask } from "../../interfaces/task.interface";
import createNewTaskService from "../../services/taks/createTaks";

const createTaksController = async (
  req: Request<{}, {}, ITask>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { body } = req;
    const newTask = await createNewTaskService(body);
    res.status(200).json(new Result<ITask>(newTask));
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.message, error.errorType)
    );
  }
};

export default createTaksController;
