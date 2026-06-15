import { Aluno } from "../models/Aluno";
export declare class AlunoService {
    listarTodas(): Promise<Aluno[]>;
    buscarPorId(id: number): Promise<Aluno | null>;
    criar(dados: Partial<Aluno>): Promise<Aluno>;
    atualizar(id: number, dados: Partial<Aluno>): Promise<Aluno | null>;
    remover(id: number): Promise<boolean>;
}
//# sourceMappingURL=AlunoService.d.ts.map