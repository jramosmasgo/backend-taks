import { Model as ModelType } from "mongoose";

const findOneResourceByField =
  <T>(Model: ModelType<T>) =>
  async <K>(field: K): Promise<any> =>
    Model.findOne({ ...field });

export default findOneResourceByField;
