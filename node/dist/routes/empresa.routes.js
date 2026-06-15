"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmpresaController_1 = require("../controllers/EmpresaController");
const validarSchema_1 = require("../middlewares/validarSchema");
const empresaValidation_1 = require("../validations/empresaValidation");
const rotas = (0, express_1.Router)();
const empresaController = new EmpresaController_1.EmpresaController();
rotas.get('/empresas', (req, res, next) => empresaController.listar(req, res, next));
rotas.get('/empresas/:id', (req, res, next) => empresaController.buscar(req, res, next));
rotas.post('/empresas', (0, validarSchema_1.validarSchema)(empresaValidation_1.criarEmpresaSchema), (req, res, next) => empresaController.criar(req, res, next));
rotas.put('/empresas/:id', (0, validarSchema_1.validarSchema)(empresaValidation_1.atualizarEmpresaSchema), (req, res, next) => empresaController.atualizar(req, res, next));
rotas.delete('/empresas/:id', (req, res, next) => empresaController.remover(req, res, next));
exports.default = rotas;
//# sourceMappingURL=empresa.routes.js.map