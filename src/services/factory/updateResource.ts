import { Model as ModelType, ObjectId, Types } from "mongoose";

const updateResource =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId, update: object): Promise<K | null> => {
    const resourceId = typeof id === "string" ? new Types.ObjectId(id) : id;
    const modelUpdate = await Model.findOneAndUpdate(
      { id: resourceId },
      update,
      { new: true }
    );
    return modelUpdate;
  };

export default updateResource;
