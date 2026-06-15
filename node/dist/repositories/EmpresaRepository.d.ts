import { Empresa } from "../models/Empresa";
export declare const EmpresaRepository: import("typeorm").Repository<Empresa> & {
    buscarTodos(): Promise<Empresa[]>;
    buscarPorId(id: number): Promise<Empresa | null>;
    criaEmpresa(dados: Partial<Empresa>): Promise<Empresa>;
    atualizarEmpresa(id: number, dados: Partial<Empresa>): Promise<Empresa | null>;
    removerEmpresa(id: number): Promise<boolean>;
};
//# sourceMappingURL=EmpresaRepository.d.ts.map