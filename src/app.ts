import express from 'express';
import { connectDB } from './config/db';
import authRouter from './routes/auth.route';

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/auth', authRouter);

app.listen(5000, () => {
  console.log('Server is running port 5000');
});
