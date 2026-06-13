import { Empresa } from "../models/Empresa";
import {FonteDados} from "../config/database";

export const EmpresaRepository = FonteDados.getRepository(Empresa).extend({
    async buscarTodos(): Promise<Empresa[]>{
        return this.find({order: {nome: "ASC"}});
    },

    async buscarPorId(id: number): Promise<Empresa | null>{
            return this.findOne({where: {id}});
        },

    async criaEmpresa(dados: Partial<Empresa>): Promise<Empresa>{
            const novaEmpresa = this.create(dados);
            return this.save(novaEmpresa);
        },
    
    async atualizarEmpresa(id: number, dados: Partial<Empresa>):Promise<Empresa | null>{
            const empresa = await this.findOneBy({id});
            if(!empresa) return null;
            this.merge(empresa, dados);
            return this.save(empresa);
        },
    
    async removerEmpresa(id:number): Promise<boolean>{
        const resultado = await this.delete(id);
        return resultado.affected !== 0;
    },

})