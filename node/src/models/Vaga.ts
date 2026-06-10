import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
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

    @Column({default: true})
    status!: boolean

    @ManyToOne(() => Empresa)
    empresa!: Empresa

    @CreateDateColumn()
    criadoEm!: Date
}