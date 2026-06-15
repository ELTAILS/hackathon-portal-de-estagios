import { Aluno } from "./Aluno";
import { Vaga } from "./Vaga";
export type StatusCandidatura = 'em_analise' | 'aprovado' | 'reprovado';
export declare class Candidatura {
    id: number;
    status: StatusCandidatura;
    aluno: Aluno;
    vaga: Vaga;
    data_candidatura: Date;
}
//# sourceMappingURL=Canditadura.d.ts.map