import { Request, Response, NextFunction } from "express";
import * as yup from 'yup';
import ApplicationError from "./applicationError";

const bodyRequestValidator = (schema: yup.ObjectSchema<any>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate(req.body);
            next();
        } catch (error: any) {
            next(new ApplicationError(403, error.message, 'validation'));
        }
    }

export default bodyRequestValidator;
