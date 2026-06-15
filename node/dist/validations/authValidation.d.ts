import { z } from 'zod';
export declare const loginAlunoSchema: z.ZodObject<{
    ra: z.ZodString;
    senha: z.ZodString;
}, z.core.$strip>;
export declare const loginEmpresaSchema: z.ZodObject<{
    cnpj: z.ZodString;
    senha: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=authValidation.d.ts.map