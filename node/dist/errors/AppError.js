"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    mensagem;
    statusCode;
    constructor(mensagem, statusCode = 400) {
        this.mensagem = mensagem;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map