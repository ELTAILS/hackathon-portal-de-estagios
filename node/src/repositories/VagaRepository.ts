import { FonteDados } from "../config/database";
import { Vaga } from "../models/Vaga";

export const VagaRepository = FonteDados.getRepository(Vaga).extend({

    async listarAbertas(): Promise<Vaga[]>{
        return this.find({
            where: {status: 'aberta'},
            relations:['empresa']
        });
    },
})