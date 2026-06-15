import { Vaga } from "../models/Vaga";
export declare class VagaService {
    private normalizarEmpresa;
    listarTodas(): Promise<Vaga[]>;
    buscarPorId(id: number): Promise<Vaga | null>;
    criar(dados: Partial<Vaga> & {
        empresaId?: number;
    }): Promise<Vaga>;
    atualizar(id: number, dados: Partial<Vaga> & {
        empresaId?: number;
    }): Promise<Vaga | null>;
    remover(id: number): Promise<boolean>;
    listarAbertas(): Promise<Vaga[]>;
}
//# sourceMappingURL=VagaService.d.ts.map