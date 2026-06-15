"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRepository = void 0;
const Empresa_1 = require("../models/Empresa");
const database_1 = require("../config/database");
exports.EmpresaRepository = database_1.FonteDados.getRepository(Empresa_1.Empresa).extend({
    async buscarTodos() {
        return this.find({ order: { nome: "ASC" } });
    },
    async buscarPorId(id) {
        return this.findOne({ where: { id } });
    },
    async criaEmpresa(dados) {
        const novaEmpresa = this.create(dados);
        return this.save(novaEmpresa);
    },
    async atualizarEmpresa(id, dados) {
        const empresa = await this.findOneBy({ id });
        if (!empresa)
            return null;
        this.merge(empresa, dados);
        return this.save(empresa);
    },
    async removerEmpresa(id) {
        const resultado = await this.delete(id);
        return resultado.affected !== 0;
    },
});
//# sourceMappingURL=EmpresaRepository.js.map