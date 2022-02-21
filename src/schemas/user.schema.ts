import { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema<IUser>({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    profile_image: { type: String },
    password: { type: String, required: [true, 'Password is required'] },
    created_at: { type: Date, default: new Date() },
    modified_at: { type: Date, default: null },
    state: { type: Boolean, default: true },
})

export default UserSchema;