"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VagaController_1 = require("../controllers/VagaController");
const validarSchema_1 = require("../middlewares/validarSchema");
const vagaValidation_1 = require("../validations/vagaValidation");
const rotas = (0, express_1.Router)();
const vagaController = new VagaController_1.VagaController();
rotas.get('/vagas', (req, res, next) => vagaController.listar(req, res, next));
rotas.get('/vagas/abertas', (req, res, next) => vagaController.listarAbertas(req, res, next));
rotas.get('/vagas/:id', (req, res, next) => vagaController.buscar(req, res, next));
rotas.post('/vagas', (0, validarSchema_1.validarSchema)(vagaValidation_1.criarVagaSchema), (req, res, next) => vagaController.criar(req, res, next));
rotas.put('/vagas/:id', (0, validarSchema_1.validarSchema)(vagaValidation_1.atualizarVagaSchema), (req, res, next) => vagaController.atualizar(req, res, next));
rotas.delete('/vagas/:id', (req, res, next) => vagaController.remover(req, res, next));
exports.default = rotas;
//# sourceMappingURL=vaga.routes.js.map