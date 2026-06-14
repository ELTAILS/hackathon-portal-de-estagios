import {Request, Response} from "express";
import { AlunoService } from "../services/AlunoService";
import { AppError } from "../errors/AppError";

const alunoService = new AlunoService();

export class AlunoController{
    
    async listar(req: Request, res:Response) : Promise<Response>{
        const aluno = await alunoService.listarTodas();
        return res.status(200).json(aluno);
    }
    
    async buscar(req: Request, res: Response) : Promise<Response>{
        const id = Number(req.params.id);
        const aluno = await alunoService.buscarPorId(id);

        if(!aluno){
            throw new AppError("Aluno não encontrada");
        }
        return res.status(200).json(aluno);
    }

    async criar(req: Request, res:Response): Promise<Response>{
        const novoAluno = await alunoService.criar(req.body);
        return res.status(201).json(novoAluno);
    }

    async atualizar(req:Request, res:Response): Promise<Response>{
        const id = Number(req.params.id);
        const alunoAtualizada = await alunoService.atualizar(id, req.body);

        if(!alunoAtualizada){
          throw new AppError("Aluno não encontrada");
        }
        return res.status(200).json(alunoAtualizada);
    }
    async remover(req: Request, res:Response): Promise<Response>{
        const id = Number(req.params.id);
        const removido = await alunoService.remover(id);

        if(!removido){
            throw new AppError("Aluno não encontrada");
        }
        return res.status(204).send();
    }
}