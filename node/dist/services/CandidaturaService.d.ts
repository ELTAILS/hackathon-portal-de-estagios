import { Candidatura, StatusCandidatura } from "../models/Canditadura";
export declare class CandidaturaService {
    listarTodas(): Promise<Candidatura[]>;
    buscarPorId(id: number): Promise<Candidatura | null>;
    listarPorAluno(alunoId: number): Promise<Candidatura[]>;
    listarPorVaga(vagaId: number): Promise<Candidatura[]>;
    criar(alunoId: number, vagaId: number): Promise<Candidatura | {
        erro: string;
    }>;
    atualizarStatus(id: number, status: StatusCandidatura): Promise<Candidatura | null>;
}
//# sourceMappingURL=CandidaturaService.d.ts.map