import { Router } from "express";
import { VagaController } from "../controllers/VagaController";
import { validarSchema } from "../middlewares/validarSchema";
import { criarVagaSchema, atualizarVagaSchema } from "../validations/vagaValidation";

const rotas = Router();
const vagaController = new VagaController();

rotas.get('/vagas', (req, res) => vagaController.listar(req, res));
rotas.get('/vagas/abertas', (req, res) => vagaController.listarAbertas(req, res));
rotas.get('/vagas/:id', (req, res) => vagaController.buscar(req, res));
rotas.post('/vagas', validarSchema(criarVagaSchema), (req, res) => vagaController.criar(req, res));
rotas.put('/vagas/:id', validarSchema(atualizarVagaSchema), (req, res) => vagaController.atualizar(req, res));
rotas.delete('/vagas/:id', (req, res) => vagaController.remover(req, res));

export default rotas;