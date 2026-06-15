import { z } from "zod";
export declare const criarEmpresaSchema: z.ZodObject<{
    nome: z.ZodString;
    cnpj: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export declare const atualizarEmpresaSchema: z.ZodObject<{
    nome: z.ZodOptional<z.ZodString>;
    cnpj: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=empresaValidation.d.ts.map