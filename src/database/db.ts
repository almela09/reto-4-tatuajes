//enlazar la base de datos

import "reflect-metadata"
import 'dotenv/config'

import { DataSource } from "typeorm"
import { Roles1709458976585 } from "./migrations/1709458976585-roles"
import { Users1709463028504 } from "./migrations/1709463028504-users"
import { Services1709541452213 } from "./migrations/1709541452213-services"
import { Appointments1709541514119 } from "./migrations/1709541514119-appointments"
import { Role } from "../models/Role"
import { User } from "../models/User"
import { Services } from "../models/Services"
import { Appointments } from "../models/Appointments"


export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST || "localhost",
port: Number(process.env.DB_PORT)||3307,
username: process.env.DB_USER ||"root",
password: process.env.DB_PASSWORD || "",
database: process.env.DB_DATABASE || "tatuajes_proyecto",
entities: [Role, User, Services, Appointments],
migrations: [Roles1709458976585,Users1709463028504, Services1709541452213, Appointments1709541514119],
synchronize: false,
logging: false,
})