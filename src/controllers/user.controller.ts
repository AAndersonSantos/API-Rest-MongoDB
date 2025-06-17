import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);

    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await userService.getUsers();
      res.status(200).json(user);

    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json(user);

    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const deletedUser = await userService.deleteUserById(req.params.id);

      if (!deletedUser) {
        res.status(404).json({ error: "Usuário não encontrado" });

      } else {
        res.status(200).json({ message: "Usuário deletado com sucesso" });
      }

    } catch (error) {
        if ((error as Error).message.includes('ID inválido')) {
            res.status(400).json({ error: (error as Error).message });

        } else {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
  }
}
