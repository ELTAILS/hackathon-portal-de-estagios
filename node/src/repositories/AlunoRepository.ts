import {FonteDados} from "../config/database";
import { Aluno } from "../models/Aluno";

export const AlunoRepository = FonteDados.getRepository(Aluno).extend({
    async buscarTodos(): Promise<Aluno[]>{
        return this.find({order: {nome: "ASC"}});
    },
})