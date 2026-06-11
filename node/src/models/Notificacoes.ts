import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Aluno } from "./Aluno";

@Entity('notificacoes')
export class Notificacao{
    
    @PrimaryGeneratedColumn()
    id!:number

    @ManyToOne(() => Aluno)
    @JoinColumn({name: 'aluno_id'})
    aluno!: Aluno

    @Column({type: 'text'})
    mensagem!: string

    @Column({default:false})
    lida!: boolean

    @CreateDateColumn()
    criadaEm!: Date
}