"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const AlunoRepository_1 = require("../repositories/AlunoRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AlunoService {
    async listarTodas() {
        return await AlunoRepository_1.AlunoRepository.buscarTodos();
    }
    async buscarPorId(id) {
        return await AlunoRepository_1.AlunoRepository.buscarPorId(id);
    }
    async criar(dados) {
        if (dados.senha) {
            dados.senha = await bcrypt_1.default.hash(dados.senha, 10);
        }
        return await AlunoRepository_1.AlunoRepository.criarAluno(dados);
    }
    async atualizar(id, dados) {
        return await AlunoRepository_1.AlunoRepository.atualizarAluno(id, dados);
    }
    async remover(id) {
        return await AlunoRepository_1.AlunoRepository.removerAluno(id);
    }
}
exports.AlunoService = AlunoService;
//# sourceMappingURL=AlunoService.js.map