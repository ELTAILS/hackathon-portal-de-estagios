"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarStatusCandidaturaSchema = exports.criarCandidaturaSchema = void 0;
const zod_1 = require("zod");
exports.criarCandidaturaSchema = zod_1.z.object({
    alunoId: zod_1.z.number().int("AlunoId deve ser um numero"),
    vagaId: zod_1.z.number().int("VagaId deve ser um numero"),
});
exports.atualizarStatusCandidaturaSchema = zod_1.z.object({
    status: zod_1.z.enum(["em_analise", "aprovado", "reprovado"], { message: "Status deve ser em_analise, aprovado ou reprovado" }),
});
//# sourceMappingURL=candidaturaValidation.js.map