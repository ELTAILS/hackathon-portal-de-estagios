"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacao = void 0;
const typeorm_1 = require("typeorm");
const Aluno_1 = require("./Aluno");
let Notificacao = class Notificacao {
    id;
    aluno;
    mensagem;
    lida;
    criada_em;
};
exports.Notificacao = Notificacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Notificacao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aluno_1.Aluno),
    (0, typeorm_1.JoinColumn)({ name: 'aluno_id' }),
    __metadata("design:type", Aluno_1.Aluno)
], Notificacao.prototype, "aluno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Notificacao.prototype, "mensagem", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Notificacao.prototype, "lida", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Notificacao.prototype, "criada_em", void 0);
exports.Notificacao = Notificacao = __decorate([
    (0, typeorm_1.Entity)('notificacoes')
], Notificacao);
//# sourceMappingURL=Notificacoes.js.map