import z from "zod";

export const criarVagaSchema = z.object({ 
    titulo: z.string().min(5, "Titulo deve ter no minimo 5 caracteres"),
    descricao: z.string().min(10, "Descricao deve ter no minimo 10 caracteres"),
    empresaId: z.number("EmpresaId deve ser um numero" ).int(),
    ativo: z.boolean().optional().default(true),
}); 

export const atualizarVagaSchema = z.object({
    titulo: z.string().min(5, "Titulo deve ter no minimo 5 caracteres").optional(),
    descricao: z.string().min(10, "Descricao deve ter no minimo 10 caracteres").optional(),
    empresaId: z.number("EmpresaId deve ser um numero").int( ).optional(),
    ativo: z.boolean().optional(),
})