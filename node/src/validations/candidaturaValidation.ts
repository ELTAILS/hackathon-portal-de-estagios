import { z } from 'zod';

export const criarCandidaturaSchema = z.object({
    alunoId: z.number().int("AlunoId deve ser um numero"),
    vagaId: z.number().int("VagaId deve ser um numero"),
});

export const atualizarStatusCandidaturaSchema = z.object({
    status: z.enum(["em_analise", "aprovado", "reprovado"], { message: "Status deve ser em_analise, aprovado ou reprovado" }),
});
     
