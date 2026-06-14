import {Router} from 'express';
import { NotificacaoController } from '../controllers/NotificacaoController';

const rotas = Router();
const notificacaoController = new NotificacaoController();

rotas.get('/notificacoes/aluno/:alunoId', (req,res) => notificacaoController.listarPorAluno(req,res));
rotas.put('/notificacoes/:id/lida', (req,res) => notificacaoController.marcarComoLida(req,res));

export default rotas;