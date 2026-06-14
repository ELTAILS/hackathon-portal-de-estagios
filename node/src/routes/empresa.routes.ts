import { Router } from "express";
import { EmpresaController } from "../controllers/EmpresaController";
import { validarSchema } from "../middlewares/validarSchema";
import { criarEmpresaSchema, atualizarEmpresaSchema } from "../validations/empresaValidation";

const rotas = Router();
const empresaController = new EmpresaController();

rotas.get('/empresas', (req, res, next) => empresaController.listar(req, res, next));
rotas.get('/empresas/:id', (req, res, next) => empresaController.buscar(req, res, next));
rotas.post('/empresas', validarSchema(criarEmpresaSchema), (req, res, next) => empresaController.criar(req, res, next));
rotas.put('/empresas/:id', validarSchema(atualizarEmpresaSchema), (req, res, next) => empresaController.atualizar(req, res, next));
rotas.delete('/empresas/:id', (req, res, next) => empresaController.remover(req, res, next));

export default rotas;