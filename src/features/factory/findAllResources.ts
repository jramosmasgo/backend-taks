import { Model as ModelType } from 'mongoose';

const findAllResources = async <T>(Model: ModelType<any>): Promise<T[]> => {
    return await Model.find();
}

export default findAllResources;