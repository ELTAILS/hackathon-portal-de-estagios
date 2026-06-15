import { FonteDados } from "../config/database";
import { Vaga } from "../models/Vaga";
import { Candidatura } from "../models/Canditadura";

export const VagaRepository = FonteDados.getRepository(Vaga).extend({

    async listarTodasComEmpresa(): Promise<Vaga[]>{
        return this.find({ relations: ['empresa'] });
    },

    async listarAbertas(): Promise<Vaga[]>{
        return this.find({
            where: {status: 'aberta'},
            relations:['empresa']
        });
    },

    async buscarPorIdComEmpresa(id: number): Promise<Vaga | null>{
        return this.findOne({where: {id}, relations: ['empresa']});
    },

    async criaVaga(dados: Partial<Vaga>): Promise<Vaga>{
        const novaVaga = this.create(dados);
        return this.save(novaVaga);
    },

    async atualizarVaga(id: number, dados: Partial<Vaga>):Promise<Vaga | null>{
        const vaga = await this.findOneBy({id});
        if(!vaga) return null;
        this.merge(vaga, dados);
        return this.save(vaga);
    },

    async removerVaga(id:number): Promise<boolean>{
        await FonteDados.getRepository(Candidatura).delete({ vaga: { id } });
        const resultado = await this.delete(id);
        return resultado.affected !== 0;
    },


})