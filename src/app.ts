import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database
connectDB()

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor WebSocket rodando na porta ${PORT}`);
});