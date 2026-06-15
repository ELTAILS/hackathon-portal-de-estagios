"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginEmpresaSchema = exports.loginAlunoSchema = void 0;
const zod_1 = require("zod");
exports.loginAlunoSchema = zod_1.z.object({
    ra: zod_1.z.string().min(3, 'RA Inválido').max(20, 'RA deve ter no maximo 20 caracteres'),
    senha: zod_1.z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
});
exports.loginEmpresaSchema = zod_1.z.object({
    cnpj: zod_1.z.string().min(14, 'CNPJ deve ter 14 caracteres').max(14, 'CNPJ deve ter 14 caracteres'),
    senha: zod_1.z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
});
//# sourceMappingURL=authValidation.js.map