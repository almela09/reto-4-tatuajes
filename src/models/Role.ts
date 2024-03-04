import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

//definicion de una entidad,que esta asociada a la tabla roles.
@Entity('roles')
export class Role extends BaseEntity {  //las clases heredan propiedades y funciones. Para heredar se usa extends.
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:'name'})
    name!: string

    
  @OneToMany(()=> User,(user)=> user.role)
  users!: User[];


}
