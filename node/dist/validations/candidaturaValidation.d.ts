import { z } from 'zod';
export declare const criarCandidaturaSchema: z.ZodObject<{
    alunoId: z.ZodNumber;
    vagaId: z.ZodNumber;
}, z.core.$strip>;
export declare const atualizarStatusCandidaturaSchema: z.ZodObject<{
    status: z.ZodEnum<{
        em_analise: "em_analise";
        aprovado: "aprovado";
        reprovado: "reprovado";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=candidaturaValidation.d.ts.map