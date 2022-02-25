import ApplicationError from "../../interfaces/applicationError";
import { ITask } from "../../interfaces/task.interface";
import TaskModel from "../../models/task.model";
import findAllResources from "../factory/findAllResources";

const getAllTaskService = async (): Promise<ITask[]> => {
  try {
    const tasks: ITask[] = await findAllResources(TaskModel);
    return tasks;
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "service");
  }
};

export default getAllTaskService;
