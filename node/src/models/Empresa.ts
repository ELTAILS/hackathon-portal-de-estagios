import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export type StatusEmpresa = 'pendente' | 'aprovada' | 'bloqueada';

@Entity('empresas')
    export class Empresa{
        
        @PrimaryGeneratedColumn()
        id!: number

        @Column({length:150})
        nome!:string

        @Column({ length: 250 })
        senha!: string

        @Column({unique: true, length: 20})
        cnpj!: string

        @Column({unique: true, length:150})
        email!:string

        @Column({type:'enum', enum:['pendente', 'aprovada', 'bloqueada'], default:'pendente'})
        status!:StatusEmpresa

    }