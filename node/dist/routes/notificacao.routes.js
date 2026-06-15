"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NotificacaoController_1 = require("../controllers/NotificacaoController");
const rotas = (0, express_1.Router)();
const notificacaoController = new NotificacaoController_1.NotificacaoController();
rotas.get('/notificacoes/aluno/:alunoId', (req, res, next) => notificacaoController.listarPorAluno(req, res, next));
rotas.patch('/notificacoes/:id/lida', (req, res, next) => notificacaoController.marcarComoLida(req, res, next));
exports.default = rotas;
//# sourceMappingURL=notificacao.routes.js.map