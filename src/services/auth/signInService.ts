import {
  IUser,
  IUserLogin,
  IUserOutput,
} from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";
import { compareEncrypt } from "../../utils/encrypt";
import findOneResourceByField from "../factory/findOneResourceByField";

const SignInService = async (dataLogin: IUserLogin): Promise<IUserOutput> => {
  try {
    const user: IUser | null = await findOneResourceByField(UserModel)({
      email: dataLogin.email,
    });

    if (!user) throw new Error("User not found");

    const validatePassword: boolean = await compareEncrypt(
      dataLogin.password,
      user.password
    );

    if (!validatePassword) throw new Error("password not coincided");

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profile_image: user.profile_image,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default SignInService;
