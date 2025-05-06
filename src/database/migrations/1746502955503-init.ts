import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1746502955503 implements MigrationInterface {
    name = 'Init1746502955503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "school" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "school_number" integer NOT NULL, "district" integer NOT NULL, "school_core_number" character varying(15) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school_specialty" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "vacancies" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "school_id" integer, CONSTRAINT "PK_edaa586a72a37f8e943579d1e79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school_specialty_by_student" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "school_id" integer, "student_id" integer, CONSTRAINT "PK_46e2f28726b72b41f64ca383444" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "first_name" character varying(110) NOT NULL, "last_name" character varying(110) NOT NULL, "dni" character varying(8) NOT NULL, "parent_first_name" character varying(8) NOT NULL, "parent_last_name" character varying(8) NOT NULL, "birthdate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_e7c9aafa64237e394ec4d8a4f7b" UNIQUE ("dni"), CONSTRAINT "UQ_d07dff004f74e47b29fa1ed8360" UNIQUE ("parent_first_name"), CONSTRAINT "UQ_061f90f29c724c895dcebbc2faf" UNIQUE ("parent_last_name"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "school_specialty" ADD CONSTRAINT "FK_25e7178d2959bc2235de7c53e6a" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_specialty_by_student" ADD CONSTRAINT "FK_2ec652fb14b7bf27172fcf8d83d" FOREIGN KEY ("school_id") REFERENCES "school_specialty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "school_specialty_by_student" ADD CONSTRAINT "FK_b542d3b60742e7ed95a68ee07e2" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "school_specialty_by_student" DROP CONSTRAINT "FK_b542d3b60742e7ed95a68ee07e2"`);
        await queryRunner.query(`ALTER TABLE "school_specialty_by_student" DROP CONSTRAINT "FK_2ec652fb14b7bf27172fcf8d83d"`);
        await queryRunner.query(`ALTER TABLE "school_specialty" DROP CONSTRAINT "FK_25e7178d2959bc2235de7c53e6a"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "school_specialty_by_student"`);
        await queryRunner.query(`DROP TABLE "school_specialty"`);
        await queryRunner.query(`DROP TABLE "school"`);
    }

}
