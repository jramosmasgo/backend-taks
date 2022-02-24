import ApplicationError from "../../interfaces/applicationError";
import { ITask } from "../../interfaces/task.interface";
import TaksModel from "../../models/task.model";
import createResource from "../factory/createResource";

const createNewTaskService = async (task: ITask): Promise<ITask> => {
  try {
    return await createResource(TaksModel)(task);
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "Service");
  }
};

export default createNewTaskService;
