"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaService = void 0;
const EmpresaRepository_1 = require("../repositories/EmpresaRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class EmpresaService {
    async listarTodas() {
        return await EmpresaRepository_1.EmpresaRepository.buscarTodos();
    }
    async buscarPorId(id) {
        return await EmpresaRepository_1.EmpresaRepository.buscarPorId(id);
    }
    async criar(dados) {
        if (dados.senha) {
            dados.senha = await bcrypt_1.default.hash(dados.senha, 10);
        }
        return await EmpresaRepository_1.EmpresaRepository.criaEmpresa(dados);
    }
    async atualizar(id, dados) {
        return await EmpresaRepository_1.EmpresaRepository.atualizarEmpresa(id, dados);
    }
    async remover(id) {
        return await EmpresaRepository_1.EmpresaRepository.removerEmpresa(id);
    }
}
exports.EmpresaService = EmpresaService;
//# sourceMappingURL=EmpresaService.js.map