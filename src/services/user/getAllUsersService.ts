import ApplicationError from "../../interfaces/applicationError";
import { IUser } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";
import findAllResources from "../factory/findAllResources";

const getAllUserService = async (): Promise<IUser[]> => {
  try {
    return await findAllResources(UserModel);
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "Service");
  }
};

export default getAllUserService;
