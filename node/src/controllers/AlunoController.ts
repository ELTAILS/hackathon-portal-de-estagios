import { Request, Response, NextFunction } from "express";
import { AlunoService } from "../services/AlunoService";
import { AppError } from "../errors/AppError";

const alunoService = new AlunoService();

export class AlunoController {

    async listar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const aluno = await alunoService.listarTodas();
            return res.status(200).json(aluno);
        } catch (erro) {
            next(erro);
        }
    }

    async buscar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const aluno = await alunoService.buscarPorId(id);

            if (!aluno) {
                throw new AppError("Aluno não encontrado", 404);
            }
            return res.status(200).json(aluno);
        } catch (erro) {
            next(erro);
        }
    }

    async criar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const novoAluno = await alunoService.criar(req.body);
            return res.status(201).json(novoAluno);
        } catch (erro) {
            next(erro);
        }
    }

    async atualizar(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const alunoAtualizada = await alunoService.atualizar(id, req.body);

            if (!alunoAtualizada) {
                throw new AppError("Aluno não encontrado", 404);
            }
            return res.status(200).json(alunoAtualizada);
        } catch (erro) {
            next(erro);
        }
    }
    async remover(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const id = Number(req.params.id);
            const removido = await alunoService.remover(id);

            if (!removido) {
                throw new AppError("Aluno não encontrado", 404);
            }

            return res.status(204).send();
        } catch (erro) {
            next(erro);
        }
    }
}
