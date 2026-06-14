import { Request, Response, NextFunction } from "express";
import { EmpresaService } from "../services/EmpresaService";
import { AppError } from "../errors/AppError";

const empresaService = new EmpresaService();

export class EmpresaController {

    async listar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const empresa = await empresaService.listarTodas();
            return res.status(200).json(empresa);
        } catch (erro) {
            next(erro);
        }
    }

    async buscar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const empresa = await empresaService.buscarPorId(id);

            if (!empresa) {
                throw new AppError("Empresa não encontrada", 404);
            }
            return res.status(200).json(empresa);
        } catch (erro) {
            next(erro);
        }
    }

    async criar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const novaEmpresa = await empresaService.criar(req.body);
            return res.status(201).json(novaEmpresa);
        } catch (erro) {
            next(erro);
        }
    }

    async atualizar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const empresaAtualizada = await empresaService.atualizar(id, req.body);

            if (!empresaAtualizada) {
                throw new AppError("Empresa não encontrada", 404);
            }
            return res.status(200).json(empresaAtualizada);
        } catch (erro) {
            next(erro);
        }
    }
    async remover(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const removido = await empresaService.remover(id);

            if (!removido) {
                throw new AppError("Empresa não encontrada", 404);
            }
            return res.status(204).send();
        } catch (erro) {
            next(erro);
        }
    }
}