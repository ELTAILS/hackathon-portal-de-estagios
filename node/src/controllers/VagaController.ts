import { Request, Response } from "express";
import { VagaService } from "../services/VagaService";

const vagaService = new VagaService();

export class VagaController {

    async listar(req: Request, res: Response): Promise<Response> {
        const vagas = await vagaService.listarTodas();
        return res.status(200).json(vagas);
    }

    async listarAbertas(req: Request, res: Response): Promise<Response> {
        const vagas = await vagaService.listarAbertas();
        return res.status(200).json(vagas);
    }

    async buscar(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const vaga = await vagaService.buscarPorId(id);

        if (!vaga) {
            return res.status(404).json({ mensagem: "Vaga não encontrada" });
        }
        return res.status(200).json(vaga);
    }

    async criar(req: Request, res: Response): Promise<Response> {
        const novaVaga = await vagaService.criar(req.body);
        return res.status(201).json(novaVaga);
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const vagaAtualizada = await vagaService.atualizar(id, req.body);

        if (!vagaAtualizada) {
            return res.status(404).json({ mensagem: "Vaga não encontrada" });
        }
        return res.status(200).json(vagaAtualizada);
    }
    async remover(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const removido = await vagaService.remover(id);

        if (!removido) {
            return res.status(404).json({ mensagem: "Vaga não encontrada" });
        }
        return res.status(204).send();
    }
}