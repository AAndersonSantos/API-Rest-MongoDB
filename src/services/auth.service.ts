import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'segredo_super_secreto';

export class AuthService {
  static async login(email: string, password: string) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Senha incorreta');
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return { token };
  }
}
