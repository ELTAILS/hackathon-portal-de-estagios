import { Router } from 'express';
import { NotificacaoController } from '../controllers/NotificacaoController';

const rotas = Router();
const notificacaoController = new NotificacaoController();

rotas.get('/notificacoes/aluno/:alunoId', (req, res, next) => notificacaoController.listarPorAluno(req, res, next));
rotas.patch('/notificacoes/:id/lida', (req, res, next) => notificacaoController.marcarComoLida(req, res, next));

export default rotas;