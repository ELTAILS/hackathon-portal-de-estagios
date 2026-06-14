import{Request, Response} from 'express';
import {NotificacaoRepository} from '../repositories/NotificacaoRepository';

export class NotificacaoController {

    async listarPorAluno(req: Request, res: Response): Promise<Response> {
        const alunoId = Number(req.params.alunoId);
        const notificacoes = await NotificacaoRepository.listarPorAluno(alunoId);
        return res.status(200).json(notificacoes);
    }

    async
}