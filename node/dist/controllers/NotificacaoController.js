"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoController = void 0;
const NotificacaoRepository_1 = require("../repositories/NotificacaoRepository");
const AppError_1 = require("../errors/AppError");
class NotificacaoController {
    async listarPorAluno(req, res, next) {
        try {
            const alunoId = Number(req.params.alunoId);
            const notificacoes = await NotificacaoRepository_1.NotificacaoRepository.listarPorAluno(alunoId);
            return res.status(200).json(notificacoes);
        }
        catch (erro) {
            next(erro);
        }
    }
    async marcarComoLida(req, res, next) {
        try {
            const id = Number(req.params.id);
            const notificacao = await NotificacaoRepository_1.NotificacaoRepository.marcarComoLida(id);
            if (!notificacao) {
                throw new AppError_1.AppError("Notificação não encontrada", 404);
            }
            return res.status(200).json(notificacao);
        }
        catch (erro) {
            next(erro);
        }
    }
}
exports.NotificacaoController = NotificacaoController;
//# sourceMappingURL=NotificacaoController.js.map