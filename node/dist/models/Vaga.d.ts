import { Empresa } from "./Empresa";
export type StatusVaga = 'aberta' | 'encerrada';
export declare class Vaga {
    id: number;
    titulo: string;
    descricao: string;
    area: string;
    status: StatusVaga;
    empresa: Empresa;
    criado_em: Date;
}
//# sourceMappingURL=Vaga.d.ts.map