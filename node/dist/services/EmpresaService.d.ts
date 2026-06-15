import { Empresa } from "../models/Empresa";
export declare class EmpresaService {
    listarTodas(): Promise<Empresa[]>;
    buscarPorId(id: number): Promise<Empresa | null>;
    criar(dados: Partial<Empresa>): Promise<Empresa>;
    atualizar(id: number, dados: Partial<Empresa>): Promise<Empresa | null>;
    remover(id: number): Promise<boolean>;
}
//# sourceMappingURL=EmpresaService.d.ts.map