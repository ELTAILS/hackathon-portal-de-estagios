"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaService = void 0;
const VagaRepository_1 = require("../repositories/VagaRepository");
class VagaService {
    normalizarEmpresa(dados) {
        const { empresaId, ...rest } = dados;
        if (empresaId && !rest.empresa) {
            return {
                ...rest,
                empresa: { id: empresaId },
            };
        }
        return rest;
    }
    async listarTodas() {
        return await VagaRepository_1.VagaRepository.listarTodasComEmpresa();
        ;
    }
    async buscarPorId(id) {
        return await VagaRepository_1.VagaRepository.buscarPorIdComEmpresa(id);
    }
    async criar(dados) {
        const dadosNormalizados = this.normalizarEmpresa(dados);
        return await VagaRepository_1.VagaRepository.criaVaga(dadosNormalizados);
    }
    async atualizar(id, dados) {
        const dadosNormalizados = this.normalizarEmpresa(dados);
        return await VagaRepository_1.VagaRepository.atualizarVaga(id, dadosNormalizados);
    }
    async remover(id) {
        return await VagaRepository_1.VagaRepository.removerVaga(id);
    }
    async listarAbertas() {
        return await VagaRepository_1.VagaRepository.listarAbertas();
    }
}
exports.VagaService = VagaService;
//# sourceMappingURL=VagaService.js.map