import { model } from "mongoose";
import { TaskScheme } from "../schemas/task.scheme";
import { ITask } from "../interfaces/task.interface";

const TaksModel = model<ITask>("Task", TaskScheme);

export default TaksModel;
