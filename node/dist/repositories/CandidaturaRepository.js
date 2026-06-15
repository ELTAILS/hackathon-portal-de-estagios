"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidaturaRepository = void 0;
const database_1 = require("../config/database");
const Canditadura_1 = require("../models/Canditadura");
exports.CandidaturaRepository = database_1.FonteDados.getRepository(Canditadura_1.Candidatura).extend({
    async buscarTodas() {
        return this.find({
            order: { data_candidatura: "DESC" },
        });
    },
    async buscarPorId(id) {
        return this.findOne({ where: { id } });
    },
    async buscarPorAluno(aluno_id) {
        return this.find({
            where: { aluno: { id: aluno_id } },
            relations: ['aluno', 'vaga', 'vaga.empresa'],
            order: { data_candidatura: "DESC" },
        });
    },
    async buscarPorVaga(vaga_id) {
        return this.find({
            where: { vaga: { id: vaga_id } },
            order: { data_candidatura: "DESC" },
        });
    },
    async buscarDuplicata(aluno_id, vaga_id) {
        return this.findOne({
            where: {
                aluno: { id: aluno_id },
                vaga: { id: vaga_id },
            },
        });
    },
    async criarCandidatura(dados) {
        const nova = this.create(dados);
        return this.save(nova);
    },
    async atualizarStatus(id, status) {
        const candidatura = await this.findOne({ where: { id }, relations: ['aluno'] });
        if (!candidatura)
            return null;
        candidatura.status = status;
        return this.save(candidatura);
    }
});
//# sourceMappingURL=CandidaturaRepository.js.map