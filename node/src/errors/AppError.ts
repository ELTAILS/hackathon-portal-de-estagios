export class AppError {
    mensagem: string
    statusCode: number

    constructor(mensagem: string, statusCode: number = 400) {
        this.mensagem = mensagem
        this.statusCode = statusCode
    }
}