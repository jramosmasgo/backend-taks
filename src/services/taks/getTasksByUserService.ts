import ApplicationError from "../../interfaces/applicationError";
import { ITask } from "../../interfaces/task.interface";
import TaskModel from "../../models/task.model";
import findAllResourceByField from "../factory/findAllResourceByField";

const getTaskByUserService = async (idUser: string): Promise<ITask[]> => {
  try {
    const Tasks = await findAllResourceByField(TaskModel)({ user: idUser });
    return Tasks;
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "service");
  }
};

export default getTaskByUserService;
