import ApplicationError from "../../interfaces/applicationError";
import { ITask } from "../../interfaces/task.interface";
import TaskModel from "../../models/task.model";
import deleteResource from "../factory/deleteResource";

const deleteTaskService = async (idTask: string): Promise<boolean> => {
  try {
    const taskUpdate: ITask | null = await deleteResource(TaskModel)(idTask);
    if (taskUpdate?.state === true) return false;
    return true;
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "service");
  }
};

export default deleteTaskService;
