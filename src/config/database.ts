import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {

  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI não definido no .env');
    }
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado com sucesso!');

  } catch (error) {
    console.error('Erro na conexão com MongoDB:', error);
    process.exit(1);
  }
  
};