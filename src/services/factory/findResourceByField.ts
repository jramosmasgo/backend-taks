import { Model as ModelType } from "mongoose";

const findResourceByField =
  <T>(Model: ModelType<T>) =>
  async <K>(field: K): Promise<any> =>
    Model.findOne({ ...field });

export default findResourceByField;
