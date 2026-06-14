import { Request, Response } from "express";
import { CandidaturaService } from "../services/CandidaturaService";
import { AppError } from "../errors/AppError";

const candidaturaService = new CandidaturaService();

export class CandidaturaController{
    async listar(req: Request, res: Response): Promise<Response>{
        const candidaturas = await candidaturaService.listarTodas();
        return res.status(200).json(candidaturas);
    }

    async buscar (req:Request, res: Response): Promise<Response>{
        const id = Number(req.params.id);
        const candidatura = await candidaturaService.buscarPorId(id);

        if(!candidatura){
            throw new AppError("Candidatura não encontrada", 404);
        }
        return res.status(200).json(candidatura);
    }

    async listarPorAluno(req:Request, res:Response):Promise<Response>{
        const alunoId = Number(req.params.alunoId);
        const candidaturas = await candidaturaService.listarPorAluno(alunoId);
        return res.status(200).json(candidaturas);
    }

    async listarPorVaga(req:Request, res:Response): Promise<Response>{
        const vagaId = Number(req.params.vagaId);
        const candidaturas = await candidaturaService.listarPorVaga(vagaId);
        return res.status(200).json(candidaturas);
    }

    async criar(req: Request, res: Response): Promise<Response>{
        const {alunoId, vagaId} = req.body;

        const resultado = await candidaturaService.criar(alunoId, vagaId);

        if('erro' in resultado) {
            return res.status(400)
        }
        return res.status(201).json(resultado);
    }

    async atualizarStatus(req: Request, res: Response): Promise<Response>{
        const id = Number(req.params.id);
        const {status} = req.body;

        const candidatura = await candidaturaService.atualizarStatus(id,status);

        if(!candidatura){
            throw new AppError("Candidatura não encontrada", 404);
        }
        return res.status(200).json(candidatura);
    }
}