import express from 'express';
import vagaRoutes from './routes/vaga.routes';
import candidaturasRoutes from './routes/candidatura.routes';
import empresaRoutes from './routes/empresa.routes';

const app = express ();
app.use(express.json());

//Rotas
app.use(vagaRoutes);
app.use(candidaturasRoutes);
app.use(empresaRoutes);

export default app;