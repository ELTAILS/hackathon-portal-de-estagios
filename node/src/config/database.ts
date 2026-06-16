import {DataSource} from "typeorm";
import 'reflect-metadata';
import { Aluno } from "../models/Aluno";
import { Empresa } from "../models/Empresa";
import { Vaga } from "../models/Vaga";
import { Candidatura } from "../models/Canditadura";
import { Notificacao } from "../models/Notificacoes";


export const FonteDados = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password: '',
    database:'portal_estagio',
    synchronize:false,
    logging:true,
    entities:[Aluno, Empresa, Vaga, Candidatura, Notificacao],
    migrations:['src/migrations/**/*.ts'],

})