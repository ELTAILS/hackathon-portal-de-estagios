"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoController = void 0;
const AlunoService_1 = require("../services/AlunoService");
const AppError_1 = require("../errors/AppError");
const alunoService = new AlunoService_1.AlunoService();
class AlunoController {
    async listar(req, res, next) {
        try {
            const aluno = await alunoService.listarTodas();
            return res.status(200).json(aluno);
        }
        catch (erro) {
            next(erro);
        }
    }
    async buscar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const aluno = await alunoService.buscarPorId(id);
            if (!aluno) {
                throw new AppError_1.AppError("Aluno não encontrado", 404);
            }
            return res.status(200).json(aluno);
        }
        catch (erro) {
            next(erro);
        }
    }
    async criar(req, res, next) {
        try {
            const novoAluno = await alunoService.criar(req.body);
            return res.status(201).json(novoAluno);
        }
        catch (erro) {
            next(erro);
        }
    }
    async atualizar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const alunoAtualizada = await alunoService.atualizar(id, req.body);
            if (!alunoAtualizada) {
                throw new AppError_1.AppError("Aluno não encontrado", 404);
            }
            return res.status(200).json(alunoAtualizada);
        }
        catch (erro) {
            next(erro);
        }
    }
    async remover(req, res, next) {
        try {
            const id = Number(req.params.id);
            const removido = await alunoService.remover(id);
            if (!removido) {
                throw new AppError_1.AppError("Aluno não encontrado", 404);
            }
            return res.status(204).send();
        }
        catch (erro) {
            next(erro);
        }
    }
}
exports.AlunoController = AlunoController;
//# sourceMappingURL=AlunoController.js.map