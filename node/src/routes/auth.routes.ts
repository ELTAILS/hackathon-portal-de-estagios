import {Router} from 'express';
import { AuthController } from '../controllers/AuthController';
import { validarSchema } from '../middlewares/validarSchema';
import {loginAlunoSchema, loginEmpresaSchema} from '../validations/authValidation';

const rotas = Router();
const authController = new AuthController();


rotas.post('/auth/aluno/login', validarSchema(loginAlunoSchema), (req, res, next) => authController.loginAluno(req, res, next));
rotas.post('/auth/empresa/login', validarSchema(loginEmpresaSchema), (req, res, next) => authController.loginEmpresa(req, res, next));

export default rotas;