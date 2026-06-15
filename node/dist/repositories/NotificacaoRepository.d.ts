import { Notificacao } from "../models/Notificacoes";
export declare const NotificacaoRepository: import("typeorm").Repository<Notificacao> & {
    criarNotificacao(alunoId: number, mensagem: string): Promise<Notificacao>;
    listarPorAluno(alunoId: number): Promise<Notificacao[]>;
    marcarComoLida(id: number): Promise<Notificacao | null>;
};
//# sourceMappingURL=NotificacaoRepository.d.ts.map