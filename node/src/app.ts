import express from 'express';
import vagaRoutes from './routes/vaga.routes';
import candidaturasRoutes from './routes/candidatura.routes';
import empresaRoutes from './routes/empresa.routes';
import alunoRoutes from './routes/aluno.routes';
import notificacaoRoutes from './routes/notificacao.routes';
import cors from 'cors';
import { erroHandler } from './middlewares/erroHandler';
import authRoutes from './routes/auth.routes';

const app = express();
//Middlwares Globais
app.use(cors());
app.use(express.json());


//Rotas
app.use(vagaRoutes);
app.use(candidaturasRoutes);
app.use(empresaRoutes);
app.use(alunoRoutes);
app.use(notificacaoRoutes);
app.use(authRoutes);

// Tratamento de erros
app .use(erroHandler);

export default app;