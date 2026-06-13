import { Router } from "express";
import { EmpresaController } from "../controllers/EmpresaController";
import { validarSchema } from "../middlewares/validarSchema";
import { criarEmpresaSchema, atualizarEmpresaSchema } from "../validations/empresaValidation";

const rotas = Router();
const empresaController = new EmpresaController();

rotas.get('/empresas', (req, res) => empresaController.listar(req, res));
rotas.get('/empresas/:id', (req, res) => empresaController.buscar(req, res));
rotas.post('/empresas', validarSchema(criarEmpresaSchema), (req, res) => empresaController.criar(req, res));
rotas.put('/empresas/:id', validarSchema(atualizarEmpresaSchema), (req, res) => empresaController.atualizar(req, res));
rotas.delete('/empresas/:id', (req, res) => empresaController.remover(req, res));

export default rotas;