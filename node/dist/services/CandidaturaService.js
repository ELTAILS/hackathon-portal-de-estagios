"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidaturaService = void 0;
const AlunoRepository_1 = require("../repositories/AlunoRepository");
const CandidaturaRepository_1 = require("../repositories/CandidaturaRepository");
const NotificacaoRepository_1 = require("../repositories/NotificacaoRepository");
const VagaRepository_1 = require("../repositories/VagaRepository");
class CandidaturaService {
    async listarTodas() {
        return await CandidaturaRepository_1.CandidaturaRepository.buscarTodas();
    }
    async buscarPorId(id) {
        return await CandidaturaRepository_1.CandidaturaRepository.buscarPorId(id);
    }
    async listarPorAluno(alunoId) {
        return await CandidaturaRepository_1.CandidaturaRepository.buscarPorAluno(alunoId);
    }
    async listarPorVaga(vagaId) {
        return await CandidaturaRepository_1.CandidaturaRepository.buscarPorVaga(vagaId);
    }
    async criar(alunoId, vagaId) {
        const aluno = await AlunoRepository_1.AlunoRepository.findOneBy({ id: alunoId });
        if (!aluno)
            return { erro: "Aluno não encontrado" };
        if (!aluno.apto)
            return { erro: "Aluno não esta apto para de se candidatar" };
        const vaga = await VagaRepository_1.VagaRepository.findOneBy({ id: vagaId });
        if (!vaga)
            return { erro: "Vaga não encontrada" };
        if (vaga.status !== 'aberta')
            return { erro: "Vaga não está aberta" };
        const duplicata = await CandidaturaRepository_1.CandidaturaRepository.buscarDuplicata(alunoId, vagaId);
        if (duplicata)
            return { erro: "Aluno já se candidatou para esse vaga" };
        return await CandidaturaRepository_1.CandidaturaRepository.criarCandidatura({
            aluno: { id: alunoId },
            vaga: { id: vagaId },
        });
    }
    async atualizarStatus(id, status) {
        const candidatura = await CandidaturaRepository_1.CandidaturaRepository.atualizarStatus(id, status);
        if (!candidatura)
            return null;
        const mensagens = {
            em_analise: "Sua candidatura está em análise.",
            aprovado: "Sua candidatura foi aprovada",
            reprovado: "Sua candidatura foi reprovada"
        };
        await NotificacaoRepository_1.NotificacaoRepository.criarNotificacao(candidatura.aluno.id, mensagens[status]);
        return candidatura;
    }
}
exports.CandidaturaService = CandidaturaService;
//# sourceMappingURL=CandidaturaService.js.map