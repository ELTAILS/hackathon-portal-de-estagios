import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Empresa } from "./Empresa";

@Entity('vagas')
export class Vaga{
    
    @PrimaryGeneratedColumn()
    id!:number
    
    @Column({length:150})
    titulo!:string

    @Column({type: 'text'})
    descricao!:string

    @Column({length:150})
    area!: string
    
    @Column({type: 'enum', enum: ['aberta', 'encerrada'], default:'aberta'})
    status!: boolean

    @ManyToOne(() => Empresa)
    @JoinColumn({name: 'empre_id'})
    empresa!: Empresa

    @CreateDateColumn({name: 'criada_em'})
    criadoEm!: Date
}