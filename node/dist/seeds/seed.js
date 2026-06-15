"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = require("../config/database");
const Aluno_1 = require("../models/Aluno");
const Empresa_1 = require("../models/Empresa");
const Vaga_1 = require("../models/Vaga");
const bcrypt_1 = __importDefault(require("bcrypt"));
const executarSeed = async () => {
    console.log('Iniciando seed...');
    await database_1.FonteDados.initialize();
    console.log('Banco conectado!');
    const senhaHash = await bcrypt_1.default.hash('123456', 10);
    const alunoRepository = database_1.FonteDados.getRepository(Aluno_1.Aluno);
    await alunoRepository.save([
        { nome: 'João Silva', ra: '2024001', email: 'joao@aluno.com', senha: senhaHash, curso: 'Tecnologia em Sistemas para Internet', apto: true, ativo: true },
        { nome: 'Maria Souza', ra: '2024002', email: 'maria@aluno.com', senha: senhaHash, curso: 'Tecnologia em Sistemas para Internet', apto: true, ativo: true },
        { nome: 'Pedro Costa', ra: '2024003', email: 'pedro@aluno.com', senha: senhaHash, curso: 'Tecnologia em Sistemas para Internet', apto: false, ativo: true },
    ]);
    console.log('Alunos criados!');
    const senhaHashEmpresa = await bcrypt_1.default.hash('123456', 10);
    const empresaRepository = database_1.FonteDados.getRepository(Empresa_1.Empresa);
    await empresaRepository.save([
        { nome: 'Tech Solutions', cnpj: '11111111000111', email: 'contato@tech.com', senha: senhaHashEmpresa, status: 'aprovada' },
        { nome: 'Dev Company', cnpj: '22222222000122', email: 'contato@dev.com', senha: senhaHashEmpresa, status: 'aprovada' },
        { nome: 'Startup XYZ', cnpj: '33333333000133', email: 'contato@startup.com', senha: senhaHashEmpresa, status: 'pendente' },
    ]);
    console.log('Empresas criadas!');
    const vagaRepository = database_1.FonteDados.getRepository(Vaga_1.Vaga);
    await vagaRepository.save([
        { titulo: 'Estágio em Desenvolvimento Web', descricao: 'Vaga para estagiário trabalhar com Node.js e TypeScript', area: 'TI', status: 'aberta', empresa: { id: 1 } },
        { titulo: 'Estágio em Marketing Digital', descricao: 'Vaga para estagiário trabalhar com redes sociais e SEO', area: 'Marketing', status: 'aberta', empresa: { id: 2 } },
        { titulo: 'Estágio em Design', descricao: 'Vaga para estagiário trabalhar com UI/UX e Figma', area: 'Design', status: 'encerrada', empresa: { id: 1 } },
    ]);
    console.log('Vagas criadas!');
    console.log('Seeds executadas com sucesso!');
    await database_1.FonteDados.destroy();
    process.exit(0);
};
executarSeed().catch((erro) => {
    console.error('Erro ao executar seeds:', erro);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map