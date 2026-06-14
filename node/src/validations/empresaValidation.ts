import {z} from "zod";

export const criarEmpresaSchema = z.object({
    nome: z.string().min(3, "Nome deve ter no minimo 3 caracteres"),
    cnpj: z.string().min(14, "CNPJ deve ter 14 caracteres").max(14, "CNPJ deve ter 14 caracteres"),
    email: z.string().email("Email invalido"),
})

export const atualizarEmpresaSchema = z.object({
    nome: z.string().min(3, "Nome deve ter no minimo 3 caracteres").optional(),
    cnpj: z.string().min(14, "CNPJ deve ter 14 caracteres").max(14, "CNPJ deve ter 14 caracteres").optional(),
    email: z.string().email("Email invalido").optional(),
})