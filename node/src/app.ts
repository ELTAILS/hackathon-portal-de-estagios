import express from 'express';
import vagaRoutes from './routes/vaga.routes';

const app = express ();

app.use(express.json());
app.use(vagaRoutes);

export default app;