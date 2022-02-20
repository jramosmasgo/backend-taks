import { Types } from "mongoose";
import { Base } from "./base.interface";

export interface ITask extends Base {
  title: string;
  body: string;
  url_image: string;
  completed: boolean;
  user: Types.ObjectId;
}
