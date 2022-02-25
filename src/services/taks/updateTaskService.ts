import ApplicationError from "../../interfaces/applicationError";
import { ITask } from "../../interfaces/task.interface";
import TaskModel from "../../models/task.model";
import updateResource from "../factory/updateResource";

const updateTaskService = async (
  idTask: string,
  task: ITask
): Promise<ITask | null> => {
  try {
    const newTask = await updateResource(TaskModel)(idTask, task);
    return newTask;
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "service");
  }
};

export default updateTaskService;
