import { Schema } from "mongoose";
import { ITask } from "../interfaces/task.interface";

const TaskScheme = new Schema<ITask>({
  title: { type: String, required: true },
  body: { type: String },
  url_image: { type: String },
  completed: { type: Boolean, default: false },
  deadline: { type: Date },
  created_at: { type: Date, default: new Date() },
  modified_at: { type: Date, default: null },
  state: { type: Boolean, default: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default TaskScheme;
