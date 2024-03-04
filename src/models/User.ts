import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Role } from "./Role";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "password" })
  password!: string;

  @Column({ name: "createdAt" })
  createdAt!: Timestamp;

  @Column({ name: "updatedAt" })
  updatedAt!: Timestamp;
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn ({ name: "role_id" }) // campo personalizado en la bd
  role!: Role;


}
