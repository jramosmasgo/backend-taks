import { Model as ModelType } from 'mongoose';

const deleteResourceById = <T>(Model: ModelType<T>) =>
    async (id: string): Promise<boolean> => {
        const result = await Model.deleteOne({ _id: id })
            .then(() => { return true })
            .catch(err => { return false })
        return result;
    }

export default deleteResourceById;