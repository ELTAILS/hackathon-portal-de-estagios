import { MigrationInterface, QueryRunner } from "typeorm";

export class PortalEstagio1781468069786 implements MigrationInterface {
    name = 'PortalEstagio1781468069786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vagas\` DROP FOREIGN KEY \`FK_d8815ee22200784e3ae124da143\``);
        await queryRunner.query(`ALTER TABLE \`vagas\` CHANGE \`empresa_id\` \`empresa_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` DROP FOREIGN KEY \`FK_25495b23c498b7fada81b549f6d\``);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` DROP FOREIGN KEY \`FK_97e1cfa7a2c7c81a1e4c7d1676c\``);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` CHANGE \`aluno_id\` \`aluno_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` CHANGE \`vaga_id\` \`vaga_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`notificacoes\` DROP FOREIGN KEY \`FK_98e8cee986b2d0c6f92686fd7e8\``);
        await queryRunner.query(`ALTER TABLE \`notificacoes\` CHANGE \`aluno_id\` \`aluno_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`vagas\` ADD CONSTRAINT \`FK_d8815ee22200784e3ae124da143\` FOREIGN KEY (\`empresa_id\`) REFERENCES \`empresas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` ADD CONSTRAINT \`FK_25495b23c498b7fada81b549f6d\` FOREIGN KEY (\`aluno_id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` ADD CONSTRAINT \`FK_97e1cfa7a2c7c81a1e4c7d1676c\` FOREIGN KEY (\`vaga_id\`) REFERENCES \`vagas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notificacoes\` ADD CONSTRAINT \`FK_98e8cee986b2d0c6f92686fd7e8\` FOREIGN KEY (\`aluno_id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notificacoes\` DROP FOREIGN KEY \`FK_98e8cee986b2d0c6f92686fd7e8\``);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` DROP FOREIGN KEY \`FK_97e1cfa7a2c7c81a1e4c7d1676c\``);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` DROP FOREIGN KEY \`FK_25495b23c498b7fada81b549f6d\``);
        await queryRunner.query(`ALTER TABLE \`vagas\` DROP FOREIGN KEY \`FK_d8815ee22200784e3ae124da143\``);
        await queryRunner.query(`ALTER TABLE \`notificacoes\` CHANGE \`aluno_id\` \`aluno_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notificacoes\` ADD CONSTRAINT \`FK_98e8cee986b2d0c6f92686fd7e8\` FOREIGN KEY (\`aluno_id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` CHANGE \`vaga_id\` \`vaga_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` CHANGE \`aluno_id\` \`aluno_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` ADD CONSTRAINT \`FK_97e1cfa7a2c7c81a1e4c7d1676c\` FOREIGN KEY (\`vaga_id\`) REFERENCES \`vagas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`candidaturas\` ADD CONSTRAINT \`FK_25495b23c498b7fada81b549f6d\` FOREIGN KEY (\`aluno_id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vagas\` CHANGE \`empresa_id\` \`empresa_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vagas\` ADD CONSTRAINT \`FK_d8815ee22200784e3ae124da143\` FOREIGN KEY (\`empresa_id\`) REFERENCES \`empresas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
