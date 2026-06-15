import { z } from "zod";
export declare const criarAlunoSchema: z.ZodObject<{
    nome: z.ZodString;
    ra: z.ZodString;
    email: z.ZodString;
    curso: z.ZodString;
    senha: z.ZodString;
    ativo: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const atualizarAlunoSchema: z.ZodObject<{
    nome: z.ZodOptional<z.ZodString>;
    ra: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    curso: z.ZodOptional<z.ZodString>;
    ativo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
//# sourceMappingURL=alunoValidation.d.ts.map