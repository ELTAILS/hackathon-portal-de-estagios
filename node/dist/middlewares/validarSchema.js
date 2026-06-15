"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarSchema = void 0;
const validarSchema = (schema) => {
    return (req, res, next) => {
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
    };
};
exports.validarSchema = validarSchema;
//# sourceMappingURL=validarSchema.js.map