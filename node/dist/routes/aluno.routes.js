"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlunoController_1 = require("../controllers/AlunoController");
const validarSchema_1 = require("../middlewares/validarSchema");
const alunoValidation_1 = require("../validations/alunoValidation");
const rotas = (0, express_1.Router)();
const alunoController = new AlunoController_1.AlunoController();
rotas.get('/alunos', (req, res, next) => alunoController.listar(req, res, next));
rotas.get('/alunos/:id', (req, res, next) => alunoController.buscar(req, res, next));
rotas.post('/alunos', (0, validarSchema_1.validarSchema)(alunoValidation_1.criarAlunoSchema), (req, res, next) => alunoController.criar(req, res, next));
rotas.put('/alunos/:id', (0, validarSchema_1.validarSchema)(alunoValidation_1.atualizarAlunoSchema), (req, res, next) => alunoController.atualizar(req, res, next));
rotas.delete('/alunos/:id', (req, res, next) => alunoController.remover(req, res, next));
exports.default = rotas;
//# sourceMappingURL=aluno.routes.js.map