import { Request, Response, NextFunction } from 'express';
import { NotificacaoRepository } from '../repositories/NotificacaoRepository';
import { AppError } from "../errors/AppError";

export class NotificacaoController {

    async listarPorAluno(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const alunoId = Number(req.params.alunoId);
            const notificacoes = await NotificacaoRepository.listarPorAluno(alunoId);
            return res.status(200).json(notificacoes);
        } catch (erro) {
            next(erro);
        }
    }

    async marcarComoLida(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const notificacao = await NotificacaoRepository.marcarComoLida(id);

            if (!notificacao) {
                throw new AppError("Notificação não encontrada", 404);
            }
            return res.status(200).json(notificacao);
        } catch (erro) {
            next(erro);
        }
    }
}