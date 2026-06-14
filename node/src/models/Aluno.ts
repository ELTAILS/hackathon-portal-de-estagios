import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('alunos')
export class Aluno {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ length: 150 })
    nome!: string

    @Column ({length:250, select: false})
    senha!: string

    @Column({ unique: true, length: 20 })
    ra!: string

    @Column({ unique: true, length: 150 })
    email!: string

    @Column({ length: 100 })
    curso!: string

    @Column({ default: false })
    apto!: boolean

    @Column({ default: true })
    ativo!: boolean

}