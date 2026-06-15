"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaRepository = void 0;
const database_1 = require("../config/database");
const Vaga_1 = require("../models/Vaga");
exports.VagaRepository = database_1.FonteDados.getRepository(Vaga_1.Vaga).extend({
    async listarTodasComEmpresa() {
        return this.find({ relations: ['empresa'] });
    },
    async listarAbertas() {
        return this.find({
            where: { status: 'aberta' },
            relations: ['empresa']
        });
    },
    async buscarPorIdComEmpresa(id) {
        return this.findOne({ where: { id }, relations: ['empresa'] });
    },
    async criaVaga(dados) {
        const novaVaga = this.create(dados);
        return this.save(novaVaga);
    },
    async atualizarVaga(id, dados) {
        const vaga = await this.findOneBy({ id });
        if (!vaga)
            return null;
        this.merge(vaga, dados);
        return this.save(vaga);
    },
    async removerVaga(id) {
        const resultado = await this.delete(id);
        return resultado.affected !== 0;
    },
});
//# sourceMappingURL=VagaRepository.js.map