import { Router } from "express";
import { VagaController } from "../controllers/VagaController";

const rotas = Router();
const vagaController = new VagaController();

rotas.get('/vagas', (req,res) => vagaController.listar(req,res));
rotas.get('/vagas/:id', (req,res) => vagaController.buscar(req,res));
rotas.post('/vagas', (req,res) => vagaController.criar(req,res));
rotas.put('/vagas/:id', (req,res) => vagaController.atualizar(req,res));
rotas.delete('/vagas/:id', (req,res) => vagaController.remover(req,res));

export default rotas;
