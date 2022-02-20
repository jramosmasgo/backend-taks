import { Model as ModelType } from "mongoose";

const deleteResourceById =
  <T>(Model: ModelType<T>) =>
  async (id: string): Promise<boolean> => {
    const result = await Model.deleteOne({ _id: id })
      .then(() => true)
      .catch((err) => false);
    return result;
  };

export default deleteResourceById;
