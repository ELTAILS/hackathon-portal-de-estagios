import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type PerfilAdmin = "administrador" | "coordenador" | "operador";

@Entity("usuarios_admin")
export class UsuarioAdmin {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  nome!: string;

  @Column({ unique: true, length: 150 })
  email!: string;

  @Column({ length: 255 })
  senha_hash!: string;

  @Column({
    type: "enum",
    enum: ["administrador", "coordenador", "operador"],
    default: "operador",
  })
  perfil!: PerfilAdmin;

}