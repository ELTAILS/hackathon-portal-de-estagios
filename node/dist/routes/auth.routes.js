"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const validarSchema_1 = require("../middlewares/validarSchema");
const authValidation_1 = require("../validations/authValidation");
const rotas = (0, express_1.Router)();
const authController = new AuthController_1.AuthController();
rotas.post('/auth/aluno/login', (0, validarSchema_1.validarSchema)(authValidation_1.loginAlunoSchema), (req, res, next) => authController.loginAluno(req, res, next));
rotas.post('/auth/empresa/login', (0, validarSchema_1.validarSchema)(authValidation_1.loginEmpresaSchema), (req, res, next) => authController.loginEmpresa(req, res, next));
exports.default = rotas;
//# sourceMappingURL=auth.routes.js.map