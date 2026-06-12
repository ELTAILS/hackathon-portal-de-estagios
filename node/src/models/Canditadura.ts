import { Entity,PrimaryGeneratedColumn, Column,CreateDateColumn,ManyToOne, JoinColumn } from "typeorm";
import { Aluno } from "./Aluno";
import { Vaga } from "./Vaga";

export type StatusCandidatura = 'em_analise' | 'aprovado' | 'reprovado';
@Entity('candidaturas')
export class Candidatura{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'enum', enum:['em_analise', 'aprovado', 'reprovado'],default: 'em_analise'})
    status!: StatusCandidatura
    
    @ManyToOne(() => Aluno)
    @JoinColumn({name: 'aluno_id'})
    aluno!: Aluno

    @ManyToOne(() => Vaga)
    @JoinColumn({name: 'vaga_id'})
    vaga!: Vaga

    @CreateDateColumn({name: 'data_candidatura'})
    data_Candidatura!: Date
}