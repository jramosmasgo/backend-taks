import { Response, Request, NextFunction } from "express";
import ApplicationError from "../../interfaces/applicationError";
import Result from "../../interfaces/response.interface";
import { ITask } from "../../interfaces/task.interface";
import updateTaskService from "../../services/taks/updateTaskService";

const updateTaskController = async (
  req: Request<{ id: string }, {}, ITask>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await updateTaskService(req.params.id, req.body);
    res.status(200).json(new Result<ITask | null>(response));
  } catch (error: any) {
    next(
      new ApplicationError(error.statusCode, error.message, error.errorType)
    );
  }
};

export default updateTaskController;
