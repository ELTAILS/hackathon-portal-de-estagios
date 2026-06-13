import express from 'express';
import vagaRoutes from './routes/vaga.routes';
import candidaturasRoutes from './routes/candidatura.routes';

const app = express ();
app.use(express.json());

//Rotas
app.use(vagaRoutes);
app.use(candidaturasRoutes);

export default app;