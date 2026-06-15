"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaController = void 0;
const EmpresaService_1 = require("../services/EmpresaService");
const AppError_1 = require("../errors/AppError");
const empresaService = new EmpresaService_1.EmpresaService();
class EmpresaController {
    async listar(req, res, next) {
        try {
            const empresa = await empresaService.listarTodas();
            return res.status(200).json(empresa);
        }
        catch (erro) {
            next(erro);
        }
    }
    async buscar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const empresa = await empresaService.buscarPorId(id);
            if (!empresa) {
                throw new AppError_1.AppError("Empresa não encontrada", 404);
            }
            return res.status(200).json(empresa);
        }
        catch (erro) {
            next(erro);
        }
    }
    async criar(req, res, next) {
        try {
            const novaEmpresa = await empresaService.criar(req.body);
            return res.status(201).json(novaEmpresa);
        }
        catch (erro) {
            next(erro);
        }
    }
    async atualizar(req, res, next) {
        try {
            const id = Number(req.params.id);
            const empresaAtualizada = await empresaService.atualizar(id, req.body);
            if (!empresaAtualizada) {
                throw new AppError_1.AppError("Empresa não encontrada", 404);
            }
            return res.status(200).json(empresaAtualizada);
        }
        catch (erro) {
            next(erro);
        }
    }
    async remover(req, res, next) {
        try {
            const id = Number(req.params.id);
            const removido = await empresaService.remover(id);
            if (!removido) {
                throw new AppError_1.AppError("Empresa não encontrada", 404);
            }
            return res.status(204).send();
        }
        catch (erro) {
            next(erro);
        }
    }
}
exports.EmpresaController = EmpresaController;
//# sourceMappingURL=EmpresaController.js.map