import { Request, Response, NextFunction } from 'express'
import { AlunoRepository } from '../repositories/AlunoRepository'
import { AppError } from '../errors/AppError'
import { EmpresaRepository } from '../repositories/EmpresaRepository'

export class AuthController {
    async loginAluno(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { ra, senha } = req.body

            const aluno = await AlunoRepository
                .createQueryBuilder('aluno')
                .addSelect('aluno.senha')
                .where('aluno.ra = :ra', { ra })
                .getOne()

            if (!aluno) {
                throw new AppError('RA ou senha inválidos', 401)
            }
            if (aluno.senha !== senha) {
                throw new AppError('RA ou senha inválidos', 401)
            }
            if (!aluno.apto) {
                throw new AppError('Aluno não apto para estágio', 403)
            }
            return res.json({
                id: aluno.id,
                nome: aluno.nome,
                ra: aluno.ra,
                email: aluno.email,
                curso: aluno.curso,
                apto: aluno.apto,
                ativo: aluno.ativo
            })
        } catch (error) {
            next(error)
        }
    }

    async loginEmpresa(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { cnpj, senha } = req.body

            const empresa = await EmpresaRepository
                .createQueryBuilder('empresa')
                .addSelect('empresa.senha')
                .where('empresa.cnpj = :cnpj', { cnpj })
                .getOne()

            if (!empresa) {
                throw new AppError('CNPJ ou senha inválidos', 401)
            }
            if (empresa.senha !== senha) {
                throw new AppError('CNPJ ou senha inválidos', 401)
            }
            if (empresa.status === 'bloqueada') {
                throw new AppError('Empresa bloqueada', 403)
            }
            if (empresa.status === 'pendente') {
                throw new AppError('Empresa ainda em análise', 403)
            }
            return res.json({
                id: empresa.id,
                nome: empresa.nome,
                cnpj: empresa.cnpj,
                email: empresa.email,
                status: empresa.status
            })
        } catch (error) {
            next(error)
        }
    }
}