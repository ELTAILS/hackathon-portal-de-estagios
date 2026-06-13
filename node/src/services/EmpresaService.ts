import { Empresa } from "../models/Empresa";
import { EmpresaRepository } from "../repositories/EmpresaRepository";

export class EmpresaService {
    async listarTodas(): Promise<Empresa[]>{
            return await EmpresaRepository.buscarTodos();
        }
    
    async buscarPorId(id: number) : Promise <Empresa | null>{
            return await EmpresaRepository.buscarPorId(id);
        }

    async criar(dados: Partial<Empresa>) : Promise <Empresa>{
            return await EmpresaRepository.criaEmpresa(dados);
        }
    
        async atualizar (id: number, dados: Partial<Empresa>): Promise<Empresa | null>{
            return await EmpresaRepository.atualizarEmpresa(id,dados);     
        }
    
        async remover(id: number): Promise<boolean>{
            return await EmpresaRepository.removerEmpresa(id);
        }
}