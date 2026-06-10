import {DataSource} from "typeorm";
import 'reflect-metadata';

export const FonteDados = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password: '',
    database:'portal_estagio',
    synchronize:false,
    logging:true,
    entities:[''],
    migrations:[''],

})