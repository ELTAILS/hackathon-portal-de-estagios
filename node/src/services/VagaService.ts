import { Vaga } from "../models/Vaga";
import { VagaRepository } from "../repositories/VagaRepository";

export class VagaService{

    async listarTodas(): Promise<Vaga[]>{
        return await VagaRepository.find({
            relations: ['empresa']
        });
    }
    
    async buscarPorId(id: number) : Promise <Vaga | null>{
        return await VagaRepository.findOne({
            where: {id},
            relations: ['empresa']
        })
    }

    async criar(dados: Partial<Vaga>) : Promise <Vaga>{
        const novaVaga = VagaRepository.create(dados);
        return await VagaRepository.save(novaVaga);
    }

    async atualizar (id: number, dados: Partial<Vaga>): Promise<Vaga | null>{
        const vaga = await VagaRepository.findOneBy({id});

            if(!vaga){
                return null;
            }
            VagaRepository.merge(vaga, dados);
            return await VagaRepository.save(vaga);       
    }

    async remover(id: number): Promise<boolean>{
        const resultado = await VagaRepository.delete(id);
        return resultado.affected !== 0;
    }
}

