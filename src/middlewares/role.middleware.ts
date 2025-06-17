import { Request, Response, NextFunction } from "express";

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: "Usuário não autenticado" });
      return;
    }

    console.error(req.user.role);

    if (!roles.includes(req.user.role)) {
      res.status(403).json({ error: "Acesso negado: Você não possui permissão" });
      return;
    }

    next();
  };
};
