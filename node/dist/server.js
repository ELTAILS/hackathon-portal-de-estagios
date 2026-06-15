"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const porta = 3000;
database_1.FonteDados.initialize()
    .then(() => {
    console.log('Banco de dados conectado');
    app_1.default.listen(porta, () => {
        console.log(`servidor rodando na porta ${porta}`);
    });
})
    .catch((erro) => {
    console.error('erro ao conectar no banco: ', erro);
});
//# sourceMappingURL=server.js.map