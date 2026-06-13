import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController";

const rotas = Router();
const alunoController = new AlunoController();

rotas.get('/alunos', (req,res) => alunoController.listar(req,res));
rotas.get('/alunos/:id', (req,res) => alunoController.buscar(req,res));
rotas.post('/alunos', (req,res) => alunoController.criar(req,res));
rotas.put('/alunos/:id', (req,res) => alunoController.atualizar(req,res));
rotas.delete('/alunos/:id', (req,res) => alunoController.remover(req,res));

export default rotas;