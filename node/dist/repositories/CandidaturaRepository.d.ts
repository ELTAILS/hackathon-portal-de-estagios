import { Candidatura, StatusCandidatura } from "../models/Canditadura";
export declare const CandidaturaRepository: import("typeorm").Repository<Candidatura> & {
    buscarTodas(): Promise<Candidatura[]>;
    buscarPorId(id: number): Promise<Candidatura | null>;
    buscarPorAluno(aluno_id: number): Promise<Candidatura[]>;
    buscarPorVaga(vaga_id: number): Promise<Candidatura[]>;
    buscarDuplicata(aluno_id: number, vaga_id: number): Promise<Candidatura | null>;
    criarCandidatura(dados: Partial<Candidatura>): Promise<Candidatura>;
    atualizarStatus(id: number, status: StatusCandidatura): Promise<Candidatura | null>;
};
//# sourceMappingURL=CandidaturaRepository.d.ts.map