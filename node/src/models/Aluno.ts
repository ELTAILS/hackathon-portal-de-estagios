import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('alunos')
export class Aluno {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ length: 150 })
    nome!: string

    @Column({ unique: true, length: 20 })
    ra!: string

    @Column({ unique: true, length: 150 })
    email!: string

    @Column({ length: 250 })
    curso!: string

    @Column({ default: true })
    apto!: boolean

    @Column({ default: true })
    ativo!: boolean

    @CreateDateColumn()
    criadoEm!: Date
}