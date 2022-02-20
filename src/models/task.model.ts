import { model } from "mongoose";
import { TaskScheme } from "../schemas/task.scheme";
import { ITask } from "../interfaces/task.interface";

export const TaksModel = model<ITask>("Task", TaskScheme);
