import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database
connectDB()

// Routes
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor WebSocket rodando na porta ${PORT}`);
});