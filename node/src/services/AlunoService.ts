import { Aluno } from "../models/Aluno";
import { AlunoRepository } from "../repositories/AlunoRepository";
import bcrypt from 'bcrypt'

export class AlunoService {
    async listarTodas(): Promise<Aluno[]>{
            return await AlunoRepository.buscarTodos();
        }
    
    async buscarPorId(id: number) : Promise <Aluno | null>{
            return await AlunoRepository.buscarPorId(id);
        }

    async criar(dados: Partial<Aluno>) : Promise <Aluno>{
           if (dados.senha) {
            dados.senha = await bcrypt.hash(dados.senha, 10)
              }
              return await AlunoRepository.criarAluno(dados);
        }
    
        async atualizar (id: number, dados: Partial<Aluno>): Promise<Aluno | null>{
            return await AlunoRepository.atualizarAluno(id,dados);     
        }
    
        async remover(id: number): Promise<boolean>{
            return await AlunoRepository.removerAluno(id);
        }
}