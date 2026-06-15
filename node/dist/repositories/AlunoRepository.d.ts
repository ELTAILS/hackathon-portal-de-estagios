import { Aluno } from "../models/Aluno";
export declare const AlunoRepository: import("typeorm").Repository<Aluno> & {
    buscarTodos(): Promise<Aluno[]>;
    buscarPorId(id: number): Promise<Aluno | null>;
    criarAluno(dados: Partial<Aluno>): Promise<Aluno>;
    atualizarAluno(id: number, dados: Partial<Aluno>): Promise<Aluno | null>;
    removerAluno(id: number): Promise<boolean>;
};
//# sourceMappingURL=AlunoRepository.d.ts.map