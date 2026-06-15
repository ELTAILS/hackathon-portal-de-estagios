import { Vaga } from "../models/Vaga";
export declare const VagaRepository: import("typeorm").Repository<Vaga> & {
    listarTodasComEmpresa(): Promise<Vaga[]>;
    listarAbertas(): Promise<Vaga[]>;
    buscarPorIdComEmpresa(id: number): Promise<Vaga | null>;
    criaVaga(dados: Partial<Vaga>): Promise<Vaga>;
    atualizarVaga(id: number, dados: Partial<Vaga>): Promise<Vaga | null>;
    removerVaga(id: number): Promise<boolean>;
};
//# sourceMappingURL=VagaRepository.d.ts.map