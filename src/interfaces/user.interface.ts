import { Base } from "./base.interface";
import { ITask } from "./task.interface";

export interface IUser extends Base {
  name: string;
  email: string;
  profile_image: string;
  password: string;
  tasks: ITask[];
}
