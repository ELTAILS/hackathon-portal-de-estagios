import { Request, Response, NextFunction } from "express";
import { VagaService } from "../services/VagaService";
import { AppError } from "../errors/AppError";
const vagaService = new VagaService();

export class VagaController {

    async listar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const vagas = await vagaService.listarTodas();
            return res.status(200).json(vagas);
        } catch (erro) {
            next(erro);
        }
    }

    async listarAbertas(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const vagas = await vagaService.listarAbertas();
            return res.status(200).json(vagas);
        } catch (erro) {
            next(erro);
        }
    }

    async buscar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const vaga = await vagaService.buscarPorId(id);
            if (!vaga) {
                throw new AppError("Vaga não encontrada", 404);
            }
            return res.status(200).json(vaga);
        } catch (erro) {
            next(erro);
        }
    }

    async criar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const novaVaga = await vagaService.criar(req.body);
            return res.status(201).json(novaVaga);
        } catch (erro) {
            next(erro);
        }
    }

    async atualizar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const vagaAtualizada = await vagaService.atualizar(id, req.body);

            if (!vagaAtualizada) {
                throw new AppError("Vaga não encontrada", 404);
            }
            return res.status(200).json(vagaAtualizada);
        } catch (erro) {
            next(erro);
        }
    }
    async remover(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const removido = await vagaService.remover(id);

            if (!removido) {
                throw new AppError("Vaga não encontrada", 404);
            }
            return res.status(204).send();
        } catch (erro) {
            next(erro);
        }
    }
}