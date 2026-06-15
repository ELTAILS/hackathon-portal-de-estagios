"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FonteDados = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const Aluno_1 = require("../models/Aluno");
const Empresa_1 = require("../models/Empresa");
const Vaga_1 = require("../models/Vaga");
const Canditadura_1 = require("../models/Canditadura");
const Notificacoes_1 = require("../models/Notificacoes");
exports.FonteDados = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'portal_estagio',
    synchronize: false,
    logging: true,
    entities: [Aluno_1.Aluno, Empresa_1.Empresa, Vaga_1.Vaga, Canditadura_1.Candidatura, Notificacoes_1.Notificacao],
    migrations: ['src/migrations/**/*.ts'],
});
//# sourceMappingURL=database.js.map