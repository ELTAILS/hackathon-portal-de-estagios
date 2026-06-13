import { Candidatura, StatusCandidatura } from "../models/Canditadura";
import { AlunoRepository } from "../repositories/AlunoRepository";
import { CandidaturaRepository } from "../repositories/CandidaturaRepository";
import { NotificacaoRepository } from "../repositories/NotificacaoRepository";
import { VagaRepository } from "../repositories/VagaRepository";
import { Aluno } from "../models/Aluno";
import { Vaga } from "../models/Vaga";

export class CandidaturaService {
    async listarTodas():Promise<Candidatura[]>{
        return await CandidaturaRepository.buscarTodas();

    }

    async buscarPorId(id: number): Promise<Candidatura | null>{
        return await CandidaturaRepository.buscarPorId(id);
    }
    
    async listarPorAluno(alunoId: number): Promise<Candidatura[]>{
        return await CandidaturaRepository.buscarPorAluno(alunoId);
    }

    async listarPorVaga(vagaId: number):Promise<Candidatura[]>{
        return await CandidaturaRepository.buscarPorVaga(vagaId);
    }
    async criar(alunoId:number, vagaId:number): Promise<Candidatura | {erro: string}>{

        const aluno = await AlunoRepository.findOneBy({id: alunoId});
        if(!aluno) return {erro: "Aluno não encontrado"};
        if(!aluno.apto) return {erro: "Aluno não esta apto para de se candidatar"};

        const vaga = await VagaRepository.findOneBy({id: vagaId});
        if(!vaga) return {erro: "Vaga não encontrada"};
        if(vaga.status !== 'aberta') return {erro: "Vaga não está aberta"};

        const duplicata = await CandidaturaRepository.buscarDuplicata(alunoId,vagaId);
        if(duplicata) return {erro: "Aluno já se candidatou para esse vaga"};

        return await CandidaturaRepository.criarCandidatura({
            aluno: { id: alunoId } as Aluno,
            vaga: { id: vagaId } as Vaga,
        });
    }

    async atualizarStatus(id: number, status: StatusCandidatura): Promise<Candidatura | null>{
        const candidatura = await CandidaturaRepository.atualizarStatus(id,status);
        if(!candidatura) return null;

        const mensagens: Record<StatusCandidatura, string> = {
            em_analise: "Sua candidatura está em análise.",
            aprovado:"Sua candidatura foi aprovada",
            reprovado: "Sua candidatura foi reprovada"
        };

        await NotificacaoRepository.criarNotificacao(candidatura.aluno.id, mensagens[status]);
        
        return candidatura;
    }
}