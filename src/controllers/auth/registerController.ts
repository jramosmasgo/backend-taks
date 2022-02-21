import { Response, Request } from "express";
import { IUser } from "../../interfaces/user.interface";
import createNewUserService from "../../services/auth/registerService";

const registerController = async (req: Request<{}, {}, IUser>, res: Response) => {
    try {
        const newUser = await createNewUserService(req.body);
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(error.statusCode).json(error.message);
    }
}

export default registerController;