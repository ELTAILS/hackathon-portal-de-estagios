import {Request, Response} from "express";
import { EmpresaService } from "../services/EmpresaService";

const empresaService = new EmpresaService();

export class EmpresaController{
    
    async listar(req: Request, res:Response) : Promise<Response>{
        const empresa = await empresaService.listarTodas();
        return res.status(200).json(empresa);
    }
    
    async buscar(req: Request, res: Response) : Promise<Response>{
        const id = Number(req.params.id);
        const empresa = await empresaService.buscarPorId(id);

        if(!empresa){
            return res.status(404).json({mensagem: "empresa não encontrada"});
        }
        return res.status(200).json(empresa);
    }

    async criar(req: Request, res:Response): Promise<Response>{
        console.log('chegou no controller', req.body)
        const novaEmpresa = await empresaService.criar(req.body);
        return res.status(201).json(novaEmpresa);
    }

    async atualizar(req:Request, res:Response): Promise<Response>{
        const id = Number(req.params.id);
        const empresaAtualizada = await empresaService.atualizar(id, req.body);

        if(!empresaAtualizada){
            return res.status(404).json({mensagem: "empresa não encontrada"});
        }
        return res.status(200).json(empresaAtualizada);
    }
    async remover(req: Request, res:Response): Promise<Response>{
        const id = Number(req.params.id);
        const removido = await empresaService.remover(id);

        if(!removido){
            return res.status(404).json({mensagem: "empresa não encontrada"});
        }
        return res.status(204).send();
    }
}