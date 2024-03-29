//enlazar la base de datos

import "reflect-metadata"
import 'dotenv/config'

import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST || "localhost",
port: Number(process.env.DB_PORT)||3307,
username: process.env.DB_USER ||"root",
password: process.env.DB_PASSWORD || "",
database: process.env.DB_DATABASE || "tatuajes_proyecto",
entities: [],
migrations: [],
synchronize: false,
logging: false,
})