import { Router } from "express";
import { CandidaturaController } from "../controllers/CandidaturaController";

const rotas = Router();
const candidaturaController = new CandidaturaController();

rotas.get('/candidaturas', (req,res) => candidaturaController .listar(req,res));
rotas.get('/candidaturas/:id', (req,res) => candidaturaController .buscar(req,res));
rotas.get('/candidaturas/aluno/:alunoId', (req,res) => candidaturaController .listarPorAluno(req,res));
rotas.get('/candidaturas/vaga/:vagaId', (req,res) => candidaturaController .listarPorVaga(req,res));
rotas.post('/candidaturas', (req,res) => candidaturaController.criar(req,res))
rotas.patch('/candidaturas/:id/status', (req,res) => candidaturaController.atualizarStatus(req,res));


export default rotas;
