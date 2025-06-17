import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { authorizeRoles } from '../middlewares/role.middleware';

const router = Router();
const userController = new UserController();

router.post('/users', authMiddleware, authorizeRoles('admin'), userController.createUser);
router.get('/users', authMiddleware, authorizeRoles('admin', 'viewer', 'editor'), userController.getUser);
router.get('/users/:id', authMiddleware, authorizeRoles('admin', 'viewer', 'editor'), userController.getUserById);
router.delete('/users/:id', authMiddleware, authorizeRoles('admin'), userController.deleteUser);

export default router;