import { FonteDados } from "../config/database";
import { Candidatura, StatusCandidatura } from "../models/Canditadura";

export const CandidaturaRepository = FonteDados.getRepository(Candidatura).extend({

    async buscarTodas(): Promise<Candidatura[]> {
        return this.find({
            order: { data_candidatura: "DESC" },
        });
    },
    async buscarPorId(id: number): Promise<Candidatura | null> {
        return this.findOne({ where: { id } })
    },

    async buscarPorAluno(aluno_id: number): Promise<Candidatura[]> {
        return this.find({
            where: { aluno: { id: aluno_id } },
            relations:['aluno', 'vaga', 'vaga.empresa'],
            order: { data_candidatura: "DESC" },
        });
    },

    async buscarPorVaga(vaga_id: number): Promise<Candidatura[]> {
        return this.find({
            where: { vaga: { id: vaga_id } },
            relations: ['aluno', 'vaga'],
            order: { data_candidatura: "DESC" },
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
    async criarCandidatura(dados: Partial<Candidatura>): Promise<Candidatura>{
        const nova = this.create(dados);
        return this.save(nova);
     },

     async atualizarStatus(id: number, status:StatusCandidatura): Promise<Candidatura | null>{
        const candidatura = await this.findOne({where: {id}, relations: ['aluno']});
        if(!candidatura) return null;

        candidatura.status = status;
        return this.save(candidatura);
     }
}



)
