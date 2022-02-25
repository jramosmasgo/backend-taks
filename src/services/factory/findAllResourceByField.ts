import { Model as ModelType } from "mongoose";

const findAllResourceByField =
  <T>(Model: ModelType<T>) =>
  async <K>(field: K): Promise<any> =>
    Model.find({ ...field });

export default findAllResourceByField;
