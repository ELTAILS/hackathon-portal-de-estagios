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
exports.Empresa = void 0;
const typeorm_1 = require("typeorm");
let Empresa = class Empresa {
    id;
    nome;
    senha;
    cnpj;
    email;
    status;
};
exports.Empresa = Empresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], Empresa.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 250, select: false }),
    __metadata("design:type", String)
], Empresa.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 20 }),
    __metadata("design:type", String)
], Empresa.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 150 }),
    __metadata("design:type", String)
], Empresa.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['pendente', 'aprovada', 'bloqueada'], default: 'pendente' }),
    __metadata("design:type", String)
], Empresa.prototype, "status", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)('empresas')
], Empresa);
//# sourceMappingURL=Empresa.js.map