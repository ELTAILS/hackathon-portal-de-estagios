"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarEmpresaSchema = exports.criarEmpresaSchema = void 0;
const zod_1 = require("zod");
exports.criarEmpresaSchema = zod_1.z.object({
    nome: zod_1.z.string().min(3, "Nome deve ter no minimo 3 caracteres"),
    cnpj: zod_1.z.string().min(14, "CNPJ deve ter 14 caracteres").max(14, "CNPJ deve ter 14 caracteres"),
    email: zod_1.z.string().email("Email invalido"),
});
exports.atualizarEmpresaSchema = zod_1.z.object({
    nome: zod_1.z.string().min(3, "Nome deve ter no minimo 3 caracteres").optional(),
    cnpj: zod_1.z.string().min(14, "CNPJ deve ter 14 caracteres").max(14, "CNPJ deve ter 14 caracteres").optional(),
    email: zod_1.z.string().email("Email invalido").optional(),
});
//# sourceMappingURL=empresaValidation.js.map