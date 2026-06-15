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
exports.Candidatura = void 0;
const typeorm_1 = require("typeorm");
const Aluno_1 = require("./Aluno");
const Vaga_1 = require("./Vaga");
let Candidatura = class Candidatura {
    id;
    status;
    aluno;
    vaga;
    data_candidatura;
};
exports.Candidatura = Candidatura;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Candidatura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['em_analise', 'aprovado', 'reprovado'], default: 'em_analise' }),
    __metadata("design:type", String)
], Candidatura.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Aluno_1.Aluno),
    (0, typeorm_1.JoinColumn)({ name: 'aluno_id' }),
    __metadata("design:type", Aluno_1.Aluno)
], Candidatura.prototype, "aluno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vaga_1.Vaga),
    (0, typeorm_1.JoinColumn)({ name: 'vaga_id' }),
    __metadata("design:type", Vaga_1.Vaga)
], Candidatura.prototype, "vaga", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'data_candidatura' }),
    __metadata("design:type", Date)
], Candidatura.prototype, "data_candidatura", void 0);
exports.Candidatura = Candidatura = __decorate([
    (0, typeorm_1.Entity)('candidaturas')
], Candidatura);
//# sourceMappingURL=Canditadura.js.map