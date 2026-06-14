import { z } from "zod";

export const criarAlunoSchema = z.object({
    nome: z.string().min(6, "Nome deve ter no minimo 6 caracteres"),
    ra: z.string().min(3, "RA invalido").max(20, "RA deve ter no maximo 20 caracteres"),
    email: z.string().email("Email invalido"),
    curso: z.string().min(2, "Curso obrigatorio"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    ativo: z.boolean().optional().default(true),
});

export const atualizarAlunoSchema = z.object({
    nome: z.string().min(6, "Nome deve ter no minimo 6 caracteres").optional(),
    ra: z.string().min(3, "RA invalido").max(20, "RA deve ter no maximo 20 caracteres").optional(),
    email: z.string().email("Email invalido").optional(),
    curso: z.string().min(2, "Curso obrigatorio").optional(),
    ativo: z.boolean().optional(),
})
