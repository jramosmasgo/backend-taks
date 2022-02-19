import { Model as ModelType } from 'mongoose';

const createResource = (Model: ModelType<any>) => async<T>(resource: T): Promise<T> => {
    const newResource = new Model(resource)
    return await newResource.save();
}

export default createResource;