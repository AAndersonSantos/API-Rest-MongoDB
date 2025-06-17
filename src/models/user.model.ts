import { Schema, model, Document } from 'mongoose';

export type UserRole = 'admin' | 'editor' | 'viewer';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['admin', 'editor', 'viewer'], 
    default: 'viewer',
    required: true
  }
});

export const User = model<IUser>('User', UserSchema);