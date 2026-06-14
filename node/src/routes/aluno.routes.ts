import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController";
import { validarSchema } from "../middlewares/validarSchema";
import { criarAlunoSchema, atualizarAlunoSchema } from "../validations/alunoValidation";

const rotas = Router();
const alunoController = new AlunoController();

rotas.get('/alunos', (req, res, next) => alunoController.listar(req, res, next));
rotas.get('/alunos/:id', (req, res, next) => alunoController.buscar(req, res, next));
rotas.post('/alunos', validarSchema(criarAlunoSchema), (req, res, next) => alunoController.criar(req, res, next));
rotas.put('/alunos/:id', validarSchema(atualizarAlunoSchema), (req, res, next) => alunoController.atualizar(req, res, next));
rotas.delete('/alunos/:id', (req, res, next) => alunoController.remover(req, res, next));

export default rotas;