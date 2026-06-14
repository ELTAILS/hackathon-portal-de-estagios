import { Request, Response } from 'express';
import { NotificacaoRepository } from '../repositories/NotificacaoRepository';

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
            return res.status(404).json({ mensagem: "Notificação não encontrada" });
        }
        return res.status(200).json(notificacao);
    }
}