import { MigrationInterface, QueryRunner } from "typeorm";

export class PortalEstagio1781453944255 implements MigrationInterface {
    name = 'PortalEstagio1781453944255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`alunos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(150) NOT NULL, \`senha\` varchar(250) NOT NULL, \`ra\` varchar(20) NOT NULL, \`email\` varchar(150) NOT NULL, \`curso\` varchar(100) NOT NULL, \`apto\` tinyint NOT NULL DEFAULT 0, \`ativo\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_10966272854c55f95c9f941828\` (\`ra\`), UNIQUE INDEX \`IDX_1f9a8f3f4e5a314a2d7f828a60\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`empresas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(150) NOT NULL, \`senha\` varchar(250) NOT NULL, \`cnpj\` varchar(20) NOT NULL, \`email\` varchar(150) NOT NULL, \`status\` enum ('pendente', 'aprovada', 'bloqueada') NOT NULL DEFAULT 'pendente', UNIQUE INDEX \`IDX_f5ed71aeb4ef47f95df5f8830b\` (\`cnpj\`), UNIQUE INDEX \`IDX_fe5e0374ec6d7d7dfbe0444690\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vagas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(150) NOT NULL, \`descricao\` text NOT NULL, \`area\` varchar(150) NOT NULL, \`status\` enum ('aberta', 'encerrada') NOT NULL DEFAULT 'aberta', \`criada_em\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`empresa_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`candidaturas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` enum ('em_analise', 'aprovado', 'reprovado') NOT NULL DEFAULT 'em_analise', \`data_candidatura\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`aluno_id\` int NULL, \`vaga_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notificacoes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`mensagem\` text NOT NULL, \`lida\` tinyint NOT NULL DEFAULT 0, \`criada_em\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`aluno_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`DROP TABLE \`notificacoes\``);
        await queryRunner.query(`DROP TABLE \`candidaturas\``);
        await queryRunner.query(`DROP TABLE \`vagas\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe5e0374ec6d7d7dfbe0444690\` ON \`empresas\``);
        await queryRunner.query(`DROP INDEX \`IDX_f5ed71aeb4ef47f95df5f8830b\` ON \`empresas\``);
        await queryRunner.query(`DROP TABLE \`empresas\``);
        await queryRunner.query(`DROP INDEX \`IDX_1f9a8f3f4e5a314a2d7f828a60\` ON \`alunos\``);
        await queryRunner.query(`DROP INDEX \`IDX_10966272854c55f95c9f941828\` ON \`alunos\``);
        await queryRunner.query(`DROP TABLE \`alunos\``);
    }

}
