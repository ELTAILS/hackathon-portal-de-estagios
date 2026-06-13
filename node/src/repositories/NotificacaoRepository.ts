import { FonteDados } from "../config/database";
import { Notificacao } from "../models/Notificacoes";

export const NotificacaoRepository = FonteDados.getRepository(Notificacao).extend({
        
    async criarNotificacao(alunoId: number, mensagem: string): Promise<Notificacao>{
            const nova = this.create({
                aluno: {id: alunoId},
                mensagem,
                lida: false,
            });
            return this.save(nova);
        },
        
        async listarPorAluno(alunoId: number): Promise<Notificacao[]>{
            return this.find({
                where: {aluno: {id: alunoId}},
                order: {criada_em:"DESC"},
            });
        },

        async marcarComoLida(id: number): Promise<Notificacao  | null>{
            const notificacao = await this.findOneBy({id});
            if(!notificacao) return null;

            notificacao.lida = true;
            return this.save(notificacao);
        }
})