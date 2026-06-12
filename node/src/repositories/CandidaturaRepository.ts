import { FonteDados } from "../config/database";
import { Candidatura, StatusCandidatura } from "../models/Canditadura";

export const CandidaturaRepository = FonteDados.getRepository(Candidatura).extend({

    async buscarTodas(): Promise<Candidatura[]> {
        return this.find({
            order: { data_Candidatura: "DESC" },
        });
    },
    async buscarPorId(id: number): Promise<Candidatura | null> {
        return this.findOne({ where: { id } })
    },

    async buscarPorAluno(aluno_id: number): Promise<Candidatura[]> {
        return this.find({
            where: { aluno: { id: aluno_id } },
            order: { data_Candidatura: "DESC" },
        });
    },

    async buscarPorVaga(vaga_id: number): Promise<Candidatura[]> {
        return this.find({
            where: { vaga: { id: vaga_id } },
            order: { data_Candidatura: "DESC" },
        });
    },

    async buscarDuplicata(aluno_id: number, vaga_id: number): Promise<Candidatura | null> {
        return this.findOne({
            where: {
                aluno: { id: aluno_id },
                vaga: { id: vaga_id },
            },
        });
    },
}



)
