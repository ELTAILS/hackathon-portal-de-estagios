import {z} from 'zod';

export const loginAlunoSchema = z.object({
    ra: z.string().min(3, 'RA Inválido').max(20, 'RA deve ter no maximo 20 caracteres'),
    senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
});

export const loginEmpresaSchema = z.object({
    cnpj: z.string().min(14, 'CNPJ deve ter 14 caracteres').max(14, 'CNPJ deve ter 14 caracteres'),
    senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
});
