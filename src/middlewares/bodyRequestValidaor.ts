import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import ApplicationError from "../interfaces/applicationError";

const bodyRequestValidator =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error: any) {
      next(new ApplicationError(403, error.message, "Validation"));
    }
  };

export default bodyRequestValidator;
