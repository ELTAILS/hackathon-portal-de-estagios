"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vaga_routes_1 = __importDefault(require("./routes/vaga.routes"));
const candidatura_routes_1 = __importDefault(require("./routes/candidatura.routes"));
const empresa_routes_1 = __importDefault(require("./routes/empresa.routes"));
const aluno_routes_1 = __importDefault(require("./routes/aluno.routes"));
const notificacao_routes_1 = __importDefault(require("./routes/notificacao.routes"));
const cors_1 = __importDefault(require("cors"));
const erroHandler_1 = require("./middlewares/erroHandler");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
//Middlwares Globais
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Rotas
app.use(vaga_routes_1.default);
app.use(candidatura_routes_1.default);
app.use(empresa_routes_1.default);
app.use(aluno_routes_1.default);
app.use(notificacao_routes_1.default);
app.use(auth_routes_1.default);
// Tratamento de erros
app.use(erroHandler_1.erroHandler);
exports.default = app;
//# sourceMappingURL=app.js.map