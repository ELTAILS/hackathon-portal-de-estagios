import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";
import { QueryFailedError } from "typeorm";

export function erroHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err)

    if (err instanceof ZodError) {
        return res.status(400).json({
            mensagem: 'Erro de validação',
            erros: err.issues.map(e => ({
                campo: e.path.join('_'),
                mensagem: e.message
            }))
        })
    }

    if (err instanceof QueryFailedError) {
        const mensagem = err.message

        if (mensagem.includes('Duplicate entry')) {
            return res.status(409).json({
                mensagem: 'Registro já existe no banco de dados'
            })
        }

        return res.status(500).json({
            mensagem: 'Erro no banco de dados'
        })
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            mensagem: err.mensagem
        })
    }

    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
}