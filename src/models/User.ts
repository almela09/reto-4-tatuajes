import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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
}
