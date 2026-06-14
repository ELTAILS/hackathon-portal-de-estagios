import { Request, Response } from 'express';
import { NotificacaoRepository } from '../repositories/NotificacaoRepository';
import {AppError} from "../errors/AppError";    
export class NotificacaoController {

    async listarPorAluno(req: Request, res: Response): Promise<Response> {
        const alunoId = Number(req.params.alunoId);
        const notificacoes = await NotificacaoRepository.listarPorAluno(alunoId);
        return res.status(200).json(notificacoes);
    }

    async marcarComoLida(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const notificacao = await NotificacaoRepository.marcarComoLida(id);

        if (!notificacao) {
            throw new AppError("Notificação não encontrada", 404);
        }
        return res.status(200).json(notificacao);
    }
}