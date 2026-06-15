"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroHandler = erroHandler;
const AppError_1 = require("../errors/AppError");
const zod_1 = require("zod");
const typeorm_1 = require("typeorm");
function erroHandler(err, req, res, next) {
    console.error(err);
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            mensagem: 'Erro de validação',
            erros: err.issues.map(e => ({
                campo: e.path.join('_'),
                mensagem: e.message
            }))
        });
    }
    if (err instanceof typeorm_1.QueryFailedError) {
        const mensagem = err.message;
        if (mensagem.includes('Duplicate entry')) {
            return res.status(409).json({
                mensagem: 'Registro já existe no banco de dados'
            });
        }
        return res.status(500).json({
            mensagem: 'Erro no banco de dados'
        });
    }
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            mensagem: err.mensagem
        });
    }
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
}
//# sourceMappingURL=erroHandler.js.map