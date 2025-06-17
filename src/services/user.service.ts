import mongoose from "mongoose";
import { User } from "../models/user.model";
import bcrypt from 'bcrypt';
export class UserService {
  
  async createUser(userData: {name: string; email: string; password: string; role: string}) {

    const { name, email, password, role } = userData;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'viewer'
    });

    return await user.save();
  }

  async getUsers() {
    return await User.find();
  }

  async getUserById(id: string) {
    return await User.findById(id);
  }

  async deleteUserById(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("ID inválido");
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return false;
    }

    return deletedUser;
  }
}
