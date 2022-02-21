import { Response, Request } from "express";
import { ITask } from "../../interfaces/task.interface";
import { createNewTaskService } from "../../services/taks/createTaks";

const createTaksController = async (
  req: Request<{}, {}, ITask>,
  res: Response
): Promise<void> => {
  try {
    const { body } = req;
    const newTask = await createNewTaskService(body);
    res.status(200).json({ newTask });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default createTaksController;
