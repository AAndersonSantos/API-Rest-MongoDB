import mongoose from "mongoose";
import { User } from "../models/user.model";
export class UserService {
  async createUser(userData: {
    name: string;
    email: string;
    password: string;
  }) {
    const user = new User(userData);
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
