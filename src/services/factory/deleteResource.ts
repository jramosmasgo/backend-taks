import { Model as ModelType, ObjectId, Types } from "mongoose";

const deleteResource =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId): Promise<K | null> => {
    const resourceId = typeof id === "string" ? new Types.ObjectId(id) : id;
    const modelUpdate = await Model.findOneAndUpdate(
      { id: resourceId },
      { status: false },
      { new: true }
    );
    return modelUpdate;
  };

export default deleteResource;
