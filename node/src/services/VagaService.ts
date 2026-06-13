import { Vaga } from "../models/Vaga";
import { VagaRepository } from "../repositories/VagaRepository";

export class VagaService{

    async listarTodas(): Promise<Vaga[]>{
        return await VagaRepository.listarTodasComEmpresa();
      ;
    }
    
    async buscarPorId(id: number) : Promise <Vaga | null>{
        return await VagaRepository.buscarPorIdComEmpresa(id);
        
    }

    async criar(dados: Partial<Vaga>) : Promise <Vaga>{
        return await VagaRepository.criaVaga(dados);
    }

    async atualizar (id: number, dados: Partial<Vaga>): Promise<Vaga | null>{
        return await VagaRepository.atualizarVaga(id,dados);     
    }

    async remover(id: number): Promise<boolean>{
        return await VagaRepository.removerVaga(id);
    }

    async listarAbertas(): Promise<Vaga[]>{
        return await VagaRepository.listarAbertas();
    }
}

