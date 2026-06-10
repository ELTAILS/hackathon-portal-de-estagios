import 'reflect-metadata';
import app from './app';
import { FonteDados } from './config/database';

const porta = 3000;

FonteDados.initialize()
    .then(() =>{
        console.log('Banco de dados conectado');
        app.listen(porta, () =>{
            console.log(`servidor rodando na porta ${porta}`);
        })
    })
    .catch((erro) =>{
        console.error('erro ao conectar no banco: ' , erro);
    });
