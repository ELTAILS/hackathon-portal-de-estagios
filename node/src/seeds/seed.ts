import 'reflect-metadata'
import { FonteDados } from '../config/database'
import { Aluno } from '../models/Aluno'
import { Empresa } from '../models/Empresa'
import { Vaga } from '../models/Vaga'
import { UsuarioAdmin } from '../models/UsuarioAdmin'
import bcrypt from 'bcrypt'

const executarSeed = async () => {
    console.log('Iniciando seed...')

    await FonteDados.initialize()
    console.log('Banco conectado!')

    const senhaHash = await bcrypt.hash('123456', 10)

    const adminRepository = FonteDados.getRepository(UsuarioAdmin)

    await adminRepository.save([
        { nome: 'Administrador UniAlfa', email: 'rafaelUnialfa@gmail.com', senha_hash: await bcrypt.hash('admin123', 10), perfil: 'administrador' },
    ])

    const alunoRepository = FonteDados.getRepository(Aluno)
    await alunoRepository.save([
        { nome: 'João Silva', ra: '2024001', email: 'joao@aluno.com', senha: senhaHash, curso: 'Tecnologia em Sistemas para Internet', apto: true, ativo: true },
        { nome: 'Maria Souza', ra: '2024002', email: 'maria@aluno.com', senha: senhaHash, curso: 'Tecnologia em Sistemas para Internet', apto: true, ativo: true },
        { nome: 'Pedro Costa', ra: '2024003', email: 'pedro@aluno.com', senha: senhaHash, curso: 'Tecnologia em Sistemas para Internet', apto: false, ativo: true },
    ])
    console.log('Alunos criados!')

    

    const senhaHashEmpresa = await bcrypt.hash('123456', 10)

    const empresaRepository = FonteDados.getRepository(Empresa)
    await empresaRepository.save([
        { nome: 'Tech Solutions', cnpj: '11111111000111', email: 'contato@tech.com', senha: senhaHashEmpresa, status: 'aprovada' },
        { nome: 'Dev Company', cnpj: '22222222000122', email: 'contato@dev.com', senha: senhaHashEmpresa, status: 'aprovada' },
        { nome: 'Startup XYZ', cnpj: '33333333000133', email: 'contato@startup.com', senha: senhaHashEmpresa, status: 'pendente' },
    ])
    console.log('Empresas criadas!')


    const vagaRepository = FonteDados.getRepository(Vaga)
    await vagaRepository.save([
        { titulo: 'Estágio em Desenvolvimento Web', descricao: 'Vaga para estagiário trabalhar com Node.js e TypeScript', area: 'TI', status: 'aberta', empresa: { id: 1 } },
        { titulo: 'Estágio em Marketing Digital', descricao: 'Vaga para estagiário trabalhar com redes sociais e SEO', area: 'Marketing', status: 'aberta', empresa: { id: 2 } },
        { titulo: 'Estágio em Design', descricao: 'Vaga para estagiário trabalhar com UI/UX e Figma', area: 'Design', status: 'encerrada', empresa: { id: 1 } },
    ])


    console.log('Vagas criadas!')

    console.log('Seeds executadas com sucesso!')
    await FonteDados.destroy()
    process.exit(0)
}

executarSeed().catch((erro) => {
    console.error('Erro ao executar seeds:', erro)
    process.exit(1)
})