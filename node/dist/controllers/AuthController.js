"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AlunoRepository_1 = require("../repositories/AlunoRepository");
const AppError_1 = require("../errors/AppError");
const EmpresaRepository_1 = require("../repositories/EmpresaRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthController {
    async loginAluno(req, res, next) {
        try {
            const { ra, senha } = req.body;
            const aluno = await AlunoRepository_1.AlunoRepository
                .createQueryBuilder('aluno')
                .addSelect('aluno.senha')
                .where('aluno.ra = :ra', { ra })
                .getOne();
            if (!aluno) {
                throw new AppError_1.AppError('RA ou senha inválidos', 401);
            }
            const senhaCorreta = await bcrypt_1.default.compare(senha, aluno.senha);
            if (!senhaCorreta) {
                throw new AppError_1.AppError('RA ou senha inválidos', 401);
            }
            if (!aluno.apto) {
                throw new AppError_1.AppError('Aluno não apto para estágio', 403);
            }
            return res.json({
                id: aluno.id,
                nome: aluno.nome,
                ra: aluno.ra,
                email: aluno.email,
                curso: aluno.curso,
                apto: aluno.apto,
                ativo: aluno.ativo
            });
        }
        catch (error) {
            next(error);
        }
    }
    async loginEmpresa(req, res, next) {
        try {
            const { cnpj, senha } = req.body;
            const empresa = await EmpresaRepository_1.EmpresaRepository
                .createQueryBuilder('empresa')
                .addSelect('empresa.senha')
                .where('empresa.cnpj = :cnpj', { cnpj })
                .getOne();
            if (!empresa) {
                throw new AppError_1.AppError('CNPJ ou senha inválidos', 401);
            }
            const senhaCorreta = await bcrypt_1.default.compare(senha, empresa.senha);
            const senhaLegacyCorreta = empresa.senha === senha;
            if (!senhaCorreta && !senhaLegacyCorreta) {
                throw new AppError_1.AppError('CNPJ ou senha inválidos', 401);
            }
            if (empresa.status === 'bloqueada') {
                throw new AppError_1.AppError('Empresa bloqueada', 403);
            }
            if (empresa.status === 'pendente') {
                throw new AppError_1.AppError('Empresa ainda em análise', 403);
            }
            return res.json({
                id: empresa.id,
                nome: empresa.nome,
                cnpj: empresa.cnpj,
                email: empresa.email,
                status: empresa.status
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map