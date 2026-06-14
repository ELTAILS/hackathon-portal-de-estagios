import express from 'express';
import vagaRoutes from './routes/vaga.routes';
import candidaturasRoutes from './routes/candidatura.routes';
import empresaRoutes from './routes/empresa.routes';
import alunoRoutes from './routes/aluno.routes';
import notificacaoRoutes from './routes/notificacao.routes';
import cors from 'cors';

const app = express ();
app.use(express.json());
app.use(cors());
    
//Rotas
app.use(vagaRoutes);
app.use(candidaturasRoutes);
app.use(empresaRoutes);
app.use(alunoRoutes);
app.use(notificacaoRoutes);
export default app;