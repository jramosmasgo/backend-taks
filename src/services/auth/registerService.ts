import { IUser } from "../../interfaces/user.interface";
import ApplicationError from "../../middlewares/applicationError";
import UserModel from "../../models/user.model";
import createResource from "../factory/createResource";

const createNewUserService = async (user: IUser): Promise<IUser> => {
    try {
        return await createResource(UserModel)(user);
    } catch (error: any) {
        throw new ApplicationError(500, error.message, 'aplication');
    }
}

export default createNewUserService

