import { Model as ModelType } from "mongoose";

const findAllResources = async <T>(Model: ModelType<any>): Promise<T[]> =>
  Model.find();

export default findAllResources;
