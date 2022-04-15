import { Model as ModelType } from "mongoose";

const findAllResourceByField =
  <T>(Model: ModelType<T>) =>
  async <K>(field: K): Promise<T[]> =>
    await Model.find({ ...field });

export default findAllResourceByField;
