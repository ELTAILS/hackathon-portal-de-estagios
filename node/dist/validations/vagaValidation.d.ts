import { z } from "zod";
export declare const criarVagaSchema: z.ZodObject<{
    titulo: z.ZodString;
    descricao: z.ZodString;
    area: z.ZodString;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        aberta: "aberta";
        encerrada: "encerrada";
    }>>>;
    empresaId: z.ZodNumber;
}, z.core.$strip>;
export declare const atualizarVagaSchema: z.ZodObject<{
    titulo: z.ZodString;
    descricao: z.ZodString;
    area: z.ZodString;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        aberta: "aberta";
        encerrada: "encerrada";
    }>>>;
    empresaId: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=vagaValidation.d.ts.map