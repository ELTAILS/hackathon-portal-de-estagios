import { Router } from "express";
import { VagaController } from "../controllers/VagaController";
import { validarSchema } from "../middlewares/validarSchema";
import { criarVagaSchema, atualizarVagaSchema } from "../validations/vagaValidation";

const rotas = Router();
const vagaController = new VagaController();

rotas.get('/vagas', (req, res, next) => vagaController.listar(req, res, next));
rotas.get('/vagas/abertas', (req, res, next) => vagaController.listarAbertas(req, res, next));
rotas.get('/vagas/:id', (req, res, next) => vagaController.buscar(req, res, next));
rotas.post('/vagas', validarSchema(criarVagaSchema), (req, res, next) => vagaController.criar(req, res, next));
rotas.put('/vagas/:id', validarSchema(atualizarVagaSchema), (req, res, next) => vagaController.atualizar(req, res, next));
rotas.delete('/vagas/:id', (req, res, next) => vagaController.remover(req, res, next));

export default rotas;