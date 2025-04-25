import { User } from '../models/user.model';

export class UserService {
  async createUser(userData: { name: string; email: string; password: string }) {
    const user = new User(userData);
    return await user.save();
  }

  async getUsers() {
    return await User.find();
  }
}