import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Appointments1709541514119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "appointments",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "name",
                  type: "varchar",
                  length: "40",
                },
                {
                    name: "user_id",
                    type: "int",
                  },
                  {
                    name: "service_id",
                    type: "int",
                  },
              ],
              foreignKeys: [
                {
                  columnNames: ["user_id"],
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
                {
                  columnNames: ["service_id"],
                  referencedTableName: "services",
                  referencedColumnNames: ["id"],
                  onDelete: "CASCADE",
                },
              ],
              uniques: [
                new TableUnique({
                  name: "user_service_unique",
                  columnNames: ["user_id", "service_id"],
                }),
              ],
            }),
            true
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments")
    }

}
