import { MigrationInterface, QueryRunner } from "typeorm";

export class Threads1693589855399 implements MigrationInterface {
    name = 'Threads1693589855399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "threads " ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "image" character varying, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6307716316f50079b89b72b24db" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "threads "`);
    }

}
