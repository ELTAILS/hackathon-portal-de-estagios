"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoRepository = void 0;
const database_1 = require("../config/database");
const Notificacoes_1 = require("../models/Notificacoes");
exports.NotificacaoRepository = database_1.FonteDados.getRepository(Notificacoes_1.Notificacao).extend({
    async criarNotificacao(alunoId, mensagem) {
        const nova = this.create({
            aluno: { id: alunoId },
            mensagem,
            lida: false,
        });
        return this.save(nova);
    },
    async listarPorAluno(alunoId) {
        return this.find({
            where: { aluno: { id: alunoId } },
            order: { criada_em: "DESC" },
        });
    },
    async marcarComoLida(id) {
        const notificacao = await this.findOneBy({ id });
        if (!notificacao)
            return null;
        notificacao.lida = true;
        return this.save(notificacao);
    }
});
//# sourceMappingURL=NotificacaoRepository.js.map