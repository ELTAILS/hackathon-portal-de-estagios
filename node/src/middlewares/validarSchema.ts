import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validarSchema = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {

        const resultado = schema.safeParse(req.body);

        if (!resultado.success) {
            {
                res.status(400).json({
                    mensagem: "Dados inválidos",
                    erros: resultado.error.issues.map((erro) => ({
                        campo: erro.path.join('.'),
                        mensagem: erro.message
                    }))

                });
                return;
            }
        }
        req.body = resultado.data;
        next();
    }
}