import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

router.post('/users', userController.createUser);
router.get('/users', userController.getUser);
router.get('/users/:id', userController.getUserById);
router.delete('/users/:id', userController.deleteUser);


export default router;