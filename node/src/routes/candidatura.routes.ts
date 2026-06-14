import { Router } from "express";
import { CandidaturaController } from "../controllers/CandidaturaController";
import { validarSchema } from "../middlewares/validarSchema";
import { criarCandidaturaSchema, atualizarStatusCandidaturaSchema } from "../validations/candidaturaValidation";

const rotas = Router();
const candidaturaController = new CandidaturaController();

rotas.get('/candidaturas', (req, res, next) => candidaturaController.listar(req, res, next));
rotas.get('/candidaturas/aluno/:alunoId', (req, res, next) => candidaturaController.listarPorAluno(req, res, next));
rotas.get('/candidaturas/vaga/:vagaId', (req, res, next) => candidaturaController.listarPorVaga(req, res, next));
rotas.get('/candidaturas/:id', (req, res, next) => candidaturaController.buscar(req, res, next));
rotas.post('/candidaturas', validarSchema(criarCandidaturaSchema), (req, res, next) => candidaturaController.criar(req, res, next));
rotas.patch('/candidaturas/:id/status', validarSchema(atualizarStatusCandidaturaSchema), (req, res, next) => candidaturaController.atualizarStatus(req, res, next));

export default rotas;