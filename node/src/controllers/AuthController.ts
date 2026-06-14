import { Request, Response, NextFunction } from 'express'
import { AlunoRepository } from '../repositories/AlunoRepository'
import { AppError } from '../errors/AppError'

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
}