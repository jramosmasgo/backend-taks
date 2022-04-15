import { Base } from "./base.interface";
import { ITask } from "./task.interface";

export interface IUser extends Base {
  name: string;
  email: string;
  profile_image: string;
  password: string;
  tasks: ITask[];
}

export type IUserOutput = Omit<
  IUser,
  "password" | "tasks" | "created_at" | "modified_at" | "state"
>;
export type IUserLogin = Omit<IUser, "name" | "profile_image" | "tasks">;

export interface IUserLoginResponse extends IUserOutput {
  token?: string;
}
