import { ITask } from "../../interfaces/task.interface";
import { TaksModel } from "../../models/task.model";
import createResource from "../factory/createResource";

export const createNewTaskService = async (task: ITask): Promise<ITask> => {
  try {
    return await createResource(TaksModel)(task);
  } catch (error) {
    throw new Error("Error on Create task");
  }
};
