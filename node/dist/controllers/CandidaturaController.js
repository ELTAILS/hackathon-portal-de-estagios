"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidaturaController = void 0;
const CandidaturaService_1 = require("../services/CandidaturaService");
const AppError_1 = require("../errors/AppError");
const candidaturaService = new CandidaturaService_1.CandidaturaService();
class CandidaturaController {
    async listar(req, res, next) {
        try {
            const candidaturas = await candidaturaService.listarTodas();
            return res.status(200).json(candidaturas);
        }
        catch (erro) {
            next(erro);
        }
    }
    async buscar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const candidatura = await candidaturaService.buscarPorId(id);
            if (!candidatura) {
                throw new AppError_1.AppError("Candidatura não encontrada", 404);
            }
            return res.status(200).json(candidatura);
        }
        catch (erro) {
            next(erro);
        }
    }
    async listarPorAluno(req, res, next) {
        try {
            const alunoId = Number(req.params.alunoId);
            const candidaturas = await candidaturaService.listarPorAluno(alunoId);
            return res.status(200).json(candidaturas);
        }
        catch (erro) {
            next(erro);
        }
    }
    async listarPorVaga(req, res, next) {
        try {
            const vagaId = Number(req.params.vagaId);
            const candidaturas = await candidaturaService.listarPorVaga(vagaId);
            return res.status(200).json(candidaturas);
        }
        catch (erro) {
            next(erro);
        }
    }
    async criar(req, res, next) {
        try {
            const { alunoId, vagaId } = req.body;
            const resultado = await candidaturaService.criar(alunoId, vagaId);
            if ('erro' in resultado) {
                return res.status(400).json(resultado);
            }
            return res.status(201).json(resultado);
        }
        catch (erro) {
            next(erro);
        }
    }
    async atualizarStatus(req, res, next) {
        try {
            const id = Number(req.params.id);
            const { status } = req.body;
            const candidatura = await candidaturaService.atualizarStatus(id, status);
            if (!candidatura) {
                throw new AppError_1.AppError("Candidatura não encontrada", 404);
            }
            return res.status(200).json(candidatura);
        }
        catch (erro) {
            next(erro);
        }
    }
}
exports.CandidaturaController = CandidaturaController;
//# sourceMappingURL=CandidaturaController.js.map