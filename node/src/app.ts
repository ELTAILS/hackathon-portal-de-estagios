import express from 'express';
import vagaRoutes from './routes/vaga.routes';
import candidaturasRoutes from './routes/candidatura.routes';
import empresaRoutes from './routes/empresa.routes';
import alunoRoutes from './routes/aluno.routes';

const app = express ();
app.use(express.json());

//Rotas
app.use(vagaRoutes);
app.use(candidaturasRoutes);
app.use(empresaRoutes);
app.use(alunoRoutes);

export default app;