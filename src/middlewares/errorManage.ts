import { Response, Request, NextFunction } from "express";
import Result from "../interfaces/response.interface";

const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction // eslint-disable-line
) => {
  const responseError = new Result<null>(
    null,
    { ...err, message: err.message },
    false
  );
  res.status(err.statusCode ? err.statusCode : 500).json(responseError);
};

export default ErrorMiddleware;
