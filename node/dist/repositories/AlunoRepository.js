"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRepository = void 0;
const database_1 = require("../config/database");
const Aluno_1 = require("../models/Aluno");
exports.AlunoRepository = database_1.FonteDados.getRepository(Aluno_1.Aluno).extend({
    async buscarTodos() {
        return this.find({ order: { nome: "ASC" } });
    },
    async buscarPorId(id) {
        return this.findOne({ where: { id } });
    },
    async criarAluno(dados) {
        const novoAluno = this.create(dados);
        return this.save(novoAluno);
    },
    async atualizarAluno(id, dados) {
        const aluno = await this.findOneBy({ id });
        if (!aluno)
            return null;
        this.merge(aluno, dados);
        return this.save(aluno);
    },
    async removerAluno(id) {
        const resultado = await this.delete(id);
        return resultado.affected !== 0;
    },
});
//# sourceMappingURL=AlunoRepository.js.map