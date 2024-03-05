import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Services } from "./Services";

@Entity("appointments")
export class Appointments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "appointment_date", type: "timestamp", nullable: false })
  appointmentDate!: Date;

  @Column({ name: "customer_name", nullable: false })
  customerName!: string;

  @ManyToOne(() => Services, (service) => service.appointments)
  service!: Services;
}
