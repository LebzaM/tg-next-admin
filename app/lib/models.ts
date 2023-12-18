import mongoose, { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
  name: string;
  lastname: string;
  telephone: string;
  email: string;
  manager?: string;
  password: string;
  department: string;
  status: boolean;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    manager: { type: String, required: false },
    password: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);


export type UserModel = mongoose.Model<IUser>;

// Check if it exits already
const User = mongoose.models.Employees || mongoose.model<IUser>('Employees', userSchema);

export default User;

//Fix later on 