import { z } from "zod";

export const criarVagaSchema = z.object({
    titulo: z.string().min(5, "Titulo deve ter no minimo 5 caracteres"),
    descricao: z.string().min(10, "Descricao deve ter no minimo 10 caracteres"),
    area: z.string().min(2, "Área é obrigatória"),
    status: z.enum(['aberta', 'encerrada']).optional().default('aberta'),
    empresaId: z.number({ message: "EmpresaId deve ser um numero" }).int(),
});

export const atualizarVagaSchema = z.object({
    titulo: z.string().min(5, "Titulo deve ter no minimo 5 caracteres").optional(),
    descricao: z.string().min(10, "Descricao deve ter no minimo 10 caracteres").optional(),
    empresaId: z.number({ message: "EmpresaId deve ser um numero" }).optional(),
    area: z.string().min(2, "Área obrigatória").optional(),
})