
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointments } from "./Appointments";

@Entity("services")
export class Services extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ name: "service_name", nullable: false })
    serviceName!: string;
  
    @Column({ name: "description", nullable: false })
    description!: string;
  
    @OneToMany(() => Appointments, (appointment) => appointment.service)
    appointments!: Appointments[];
}

