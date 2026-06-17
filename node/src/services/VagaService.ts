import { Vaga } from "../models/Vaga";
import { VagaRepository } from "../repositories/VagaRepository";

export class VagaService{

    private normalizarEmpresa(dados: Partial<Vaga> & { empresaId?: number }): Partial<Vaga> {
        const { empresaId, ...rest } = dados as Partial<Vaga> & { empresaId?: number };

        if (empresaId && !rest.empresa) {
            return {
                ...rest,
                empresa: { id: empresaId } as any,
            };
        }

        return rest as Partial<Vaga>;
    }

    async listarTodas(): Promise<Vaga[]>{
        return await VagaRepository.listarTodasComEmpresa();
      ;
    }
    
    async buscarPorId(id: number) : Promise <Vaga | null>{
        return await VagaRepository.buscarPorIdComEmpresa(id);
        
    }

    async criar(dados: Partial<Vaga> & { empresaId?: number }): Promise <Vaga>{
        const dadosNormalizados = this.normalizarEmpresa(dados);
        return await VagaRepository.criaVaga(dadosNormalizados);
    }

    async atualizar (id: number, dados: Partial<Vaga> & { empresaId?: number }): Promise<Vaga | null>{
        const dadosNormalizados = this.normalizarEmpresa(dados);
        return await VagaRepository.atualizarVaga(id, dadosNormalizados);     
    }

    async remover(id: number): Promise<boolean>{
        return await VagaRepository.removerVaga(id);
    }

    async listarAbertas(): Promise<Vaga[]>{
        return await VagaRepository.listarAbertas();
    }
}

