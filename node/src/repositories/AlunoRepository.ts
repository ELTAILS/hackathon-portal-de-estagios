import {FonteDados} from "../config/database";
import { Aluno } from "../models/Aluno";

export const AlunoRepository = FonteDados.getRepository(Aluno).extend({
    async buscarTodos(): Promise<Aluno[]>{
        return this.find({order: {nome: "ASC"}});
    },

    async buscarPorId(id: number): Promise<Aluno | null>{
            return this.findOne({where: {id}});
        },

    async criaAluno(dados: Partial<Aluno>): Promise<Aluno>{
            const novoAluno = this.create(dados);
            return this.save(novoAluno);
        },
    
    async atualizarAluno(id: number, dados: Partial<Aluno>):Promise<Aluno | null>{
            const aluno = await this.findOneBy({id});
            if(!aluno) return null;
            this.merge(aluno, dados);
            return this.save(aluno);
        },
    
    async removerAluno(id:number): Promise<boolean>{
        const resultado = await this.delete(id);
        return resultado.affected !== 0;
    },

})