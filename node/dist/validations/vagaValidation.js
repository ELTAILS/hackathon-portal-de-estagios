"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarVagaSchema = exports.criarVagaSchema = void 0;
const zod_1 = require("zod");
exports.criarVagaSchema = zod_1.z.object({
    titulo: zod_1.z.string().min(5, "Titulo deve ter no minimo 5 caracteres"),
    descricao: zod_1.z.string().min(10, "Descricao deve ter no minimo 10 caracteres"),
    area: zod_1.z.string().min(2, "Área é obrigatória"),
    status: zod_1.z.enum(['aberta', 'encerrada']).optional().default('aberta'),
    empresaId: zod_1.z.number({ message: "EmpresaId deve ser um numero" }).int(),
});
exports.atualizarVagaSchema = zod_1.z.object({
    titulo: zod_1.z.string().min(5, "Titulo deve ter no minimo 5 caracteres"),
    descricao: zod_1.z.string().min(10, "Descricao deve ter no minimo 10 caracteres"),
    area: zod_1.z.string().min(2, "Área é obrigatória"),
    status: zod_1.z.enum(['aberta', 'encerrada']).optional().default('aberta'),
    empresaId: zod_1.z.number({ message: "EmpresaId deve ser um numero" }).int(),
});
//# sourceMappingURL=vagaValidation.js.map