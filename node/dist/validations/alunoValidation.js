"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarAlunoSchema = exports.criarAlunoSchema = void 0;
const zod_1 = require("zod");
exports.criarAlunoSchema = zod_1.z.object({
    nome: zod_1.z.string().min(6, "Nome deve ter no minimo 6 caracteres"),
    ra: zod_1.z.string().min(3, "RA invalido").max(20, "RA deve ter no maximo 20 caracteres"),
    email: zod_1.z.string().email("Email invalido"),
    curso: zod_1.z.string().min(2, "Curso obrigatorio"),
    senha: zod_1.z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    ativo: zod_1.z.boolean().optional().default(true),
});
exports.atualizarAlunoSchema = zod_1.z.object({
    nome: zod_1.z.string().min(6, "Nome deve ter no minimo 6 caracteres").optional(),
    ra: zod_1.z.string().min(3, "RA invalido").max(20, "RA deve ter no maximo 20 caracteres").optional(),
    email: zod_1.z.string().email("Email invalido").optional(),
    curso: zod_1.z.string().min(2, "Curso obrigatorio").optional(),
    ativo: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=alunoValidation.js.map