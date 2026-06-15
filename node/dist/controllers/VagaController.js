"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaController = void 0;
const VagaService_1 = require("../services/VagaService");
const AppError_1 = require("../errors/AppError");
const vagaService = new VagaService_1.VagaService();
class VagaController {
    async listar(req, res, next) {
        try {
            const vagas = await vagaService.listarTodas();
            return res.status(200).json(vagas);
        }
        catch (erro) {
            next(erro);
        }
    }
    async listarAbertas(req, res, next) {
        try {
            const vagas = await vagaService.listarAbertas();
            return res.status(200).json(vagas);
        }
        catch (erro) {
            next(erro);
        }
    }
    async buscar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const vaga = await vagaService.buscarPorId(id);
            if (!vaga) {
                throw new AppError_1.AppError("Vaga não encontrada", 404);
            }
            return res.status(200).json(vaga);
        }
        catch (erro) {
            next(erro);
        }
    }
    async criar(req, res, next) {
        try {
            const novaVaga = await vagaService.criar(req.body);
            return res.status(201).json(novaVaga);
        }
        catch (erro) {
            next(erro);
        }
    }
    async atualizar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const vagaAtualizada = await vagaService.atualizar(id, req.body);
            if (!vagaAtualizada) {
                throw new AppError_1.AppError("Vaga não encontrada", 404);
            }
            return res.status(200).json(vagaAtualizada);
        }
        catch (erro) {
            next(erro);
        }
    }
    async remover(req, res, next) {
        try {
            const id = Number(req.params.id);
            const removido = await vagaService.remover(id);
            if (!removido) {
                throw new AppError_1.AppError("Vaga não encontrada", 404);
            }
            return res.status(204).send();
        }
        catch (erro) {
            next(erro);
        }
    }
}
exports.VagaController = VagaController;
//# sourceMappingURL=VagaController.js.map