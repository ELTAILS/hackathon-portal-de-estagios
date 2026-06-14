import { Empresa } from "../models/Empresa";
import { EmpresaRepository } from "../repositories/EmpresaRepository";
import bcrypt from 'bcrypt'

export class EmpresaService {
    async listarTodas(): Promise<Empresa[]>{
            return await EmpresaRepository.buscarTodos();
        }
    
    async buscarPorId(id: number) : Promise <Empresa | null>{
            return await EmpresaRepository.buscarPorId(id);
        }

    async criar(dados: Partial<Empresa>) : Promise <Empresa>{
        if(dados.senha) {
            dados.senha = await bcrypt.hash(dados.senha, 10);
        }
            return await EmpresaRepository.criaEmpresa(dados);
        }
    
        async atualizar (id: number, dados: Partial<Empresa>): Promise<Empresa | null>{
            return await EmpresaRepository.atualizarEmpresa(id,dados);     
        }
    
        async remover(id: number): Promise<boolean>{
            return await EmpresaRepository.removerEmpresa(id);
        }
}