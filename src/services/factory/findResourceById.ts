import { Model as ModelType } from "mongoose";

const findResourceById =
  <T>(Model: ModelType<T>) =>
  async (id: string): Promise<T | null> =>
    Model.findById({ _id: id });

export default findResourceById;
