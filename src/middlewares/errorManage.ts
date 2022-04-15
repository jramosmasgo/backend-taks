import { Response, Request, NextFunction } from "express";
import ResponseApi from "../core/apiResponse";

const ErrorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  new ResponseApi<null>({
    error: err,
    data: null,
    message: err.message,
  }).sendError(res, err.statusCode ?? 500);
};

export default ErrorMiddleware;
