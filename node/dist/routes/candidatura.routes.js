"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CandidaturaController_1 = require("../controllers/CandidaturaController");
const validarSchema_1 = require("../middlewares/validarSchema");
const candidaturaValidation_1 = require("../validations/candidaturaValidation");
const rotas = (0, express_1.Router)();
const candidaturaController = new CandidaturaController_1.CandidaturaController();
rotas.get('/candidaturas', (req, res, next) => candidaturaController.listar(req, res, next));
rotas.get('/candidaturas/aluno/:alunoId', (req, res, next) => candidaturaController.listarPorAluno(req, res, next));
rotas.get('/candidaturas/vaga/:vagaId', (req, res, next) => candidaturaController.listarPorVaga(req, res, next));
rotas.get('/candidaturas/:id', (req, res, next) => candidaturaController.buscar(req, res, next));
rotas.post('/candidaturas', (0, validarSchema_1.validarSchema)(candidaturaValidation_1.criarCandidaturaSchema), (req, res, next) => candidaturaController.criar(req, res, next));
rotas.patch('/candidaturas/:id/status', (0, validarSchema_1.validarSchema)(candidaturaValidation_1.atualizarStatusCandidaturaSchema), (req, res, next) => candidaturaController.atualizarStatus(req, res, next));
exports.default = rotas;
//# sourceMappingURL=candidatura.routes.js.map