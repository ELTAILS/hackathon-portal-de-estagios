import {z} from "zod";

export const criarAlunoSchema = z.object({
    nome: z.string().min(6, "Nome deve ter no minimo 6 caracteres"),
    ra: z.string().min(3, "RA invalido").max(20, "RA deve ter no maximo 20 caracteres"),
    email: z.string().email("Email invalido"),
    curso: z.string().min(2, "Curso obrigatorio"),
    apto: z.boolean().optional().default(false),
    ativo: z.boolean().optional().default(true),
});

export const atualizarAlunoSchema = criarAlunoSchema.partial();

export type CriarAlunoDTO = z.infer<typeof criarAlunoSchema>;
export type AtualizarAlunoDTO = z.infer<typeof atualizarAlunoSchema>;