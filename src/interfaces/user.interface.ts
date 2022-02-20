import { Base } from "./base.interface";

export interface IUser extends Base {
  name: string;
  email: string;
  profile_image: string;
  password: string;
}
