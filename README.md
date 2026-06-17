🎓 Portal de Estágios UniALFA

Plataforma completa para gestão de estágios da Faculdade UniALFA, desenvolvida durante o hackathon institucional. O sistema conecta alunos a empresas da região que buscam novos talentos, e é dividido em três módulos que conversam entre si através de uma API central e um banco de dados compartilhado.

📋 Sobre o Projeto

O Portal de Estágios UniALFA centraliza todo o ciclo de um estágio: cadastro de alunos e empresas, publicação de vagas, candidaturas e acompanhamento de status, com notificações automáticas para o aluno a cada mudança. O projeto foi construído por uma equipe de 4 integrantes, cada um responsável por uma camada da arquitetura.

🏗️ Arquitetura do Sistema

O sistema é dividido em 3 módulos principais, todos compartilhando o mesmo banco de dados MySQL:

Java (Back Office)   →  gestão administrativa, acesso direto ao banco via JDBC
Node.js (API)         →  motor do sistema, centraliza regras de negócio e dados
PHP (Front-end)       →  Portal do Aluno e Painel da Empresa, consome a API Node

| Módulo | Tecnologia | Responsável | Acesso ao Banco |
|---|---|---|---|
| Back Office | Java + Swing | Danilo / Adrian | Direto (JDBC) |
| API Central | Node.js + TypeScript | Hiago | Via TypeORM |
| Front-end Web | PHP | Wagner | Via API Node |

Fluxo de uma requisição (Node):

Requisição HTTP → Middleware Zod (valida) → Controller → Service (regras de negócio) → Repository (banco) → Resposta JSON

🚀 Tecnologias Utilizadas

Node.js (API)
- Node.js — plataforma de execução
- TypeScript — linguagem
- Express — framework HTTP
- TypeORM — ORM para banco de dados
- Zod — validação de dados
- Nodemon — reinício automático em desenvolvimento
- CORS — liberação de acesso entre origens (PHP ↔ Node)

PHP (Front-end)
- PHP puro orientado a objetos (sem framework)
- Arquitetura MVC simplificada com Front Controller
- cURL para comunicação HTTP com a API Node
- .htaccess para URLs amigáveis

Java (Back Office)
- Java 21
- Swing para interface desktop
- JDBC (MySQL) para acesso direto ao banco
- Maven para gerenciamento de dependências

🗄️ Banco de Dados

O banco MySQL é compartilhado entre os três módulos e possui 5 tabelas principais:

alunos        → cadastro de alunos (gerenciado pelo Java)
empresas      → cadastro de empresas (status: pendente/aprovada/bloqueada)
vagas         → vagas de estágio (status: aberta/encerrada)
candidaturas  → candidaturas dos alunos (status: em_analise/aprovado/reprovado)
notificacoes  → notificações automáticas (geradas pelo Node)

Relacionamentos:
- vagas.empresa_id → empresas.id
- candidaturas.aluno_id → alunos.id
- candidaturas.vaga_id → vagas.id
- notificacoes.aluno_id → alunos.id

📦 Instalação e Execução

Pré-requisitos gerais
- Node.js instalado
- PHP 8+ e servidor Apache (recomendado: XAMPP)
- Java 21 e Maven
- MySQL rodando localmente

1. Clone o repositório

git clone https://github.com/ELTAILS/hackathon-portal-de-estagios.git
cd hackathon-portal-de-estagios

2. Crie o banco de dados

CREATE DATABASE portal_estagio;

--- Módulo Node.js (API) ---

cd node
npm install

Configure o banco de dados em src/config/database.ts (ajuste username e password conforme seu ambiente).

npm run migration:run
npm run seed
npm run dev

A API estará rodando em http://localhost:3000

--- Módulo PHP (Front-end) ---

1. Copie a pasta php para o diretório do seu servidor Apache (ex: htdocs do XAMPP).
2. Garanta que a API Node já esteja rodando em http://localhost:3000, pois o PHP consome todos os dados através dela (o PHP não acessa o banco diretamente).
3. Acesse o projeto pelo navegador, por exemplo: http://localhost/hackathon-portal-de-estagios/php
4. O arquivo .htaccess já está configurado para redirecionar todas as rotas através do index.php, deixando as URLs amigáveis (ex: /vagas em vez de ?url=vagas).

--- Módulo Java (Back Office) ---

cd java
mvn clean install

Configure a conexão com o banco no arquivo de conexão do projeto (mesmo banco portal_estagio usado pelo Node).

mvn exec:java -Dexec.mainClass="Main"

Ou execute a classe Main diretamente pela sua IDE (IntelliJ, Eclipse ou VS Code com extensão Java).

📡 Endpoints da API (Node.js)

Autenticação

| Método | Rota | Descrição |
|---|---|---|
| POST | /auth/aluno/login | Login do aluno (por RA e senha) |
| POST | /auth/empresa/login | Login da empresa (por CNPJ e senha) |

Alunos

| Método | Rota | Descrição |
|---|---|---|
| GET | /alunos | Listar todos |
| GET | /alunos/:id | Buscar por ID |
| POST | /alunos | Cadastrar |
| PUT | /alunos/:id | Atualizar |
| DELETE | /alunos/:id | Remover |

Empresas

| Método | Rota | Descrição |
|---|---|---|
| GET | /empresas | Listar todas |
| GET | /empresas/:id | Buscar por ID |
| POST | /empresas | Cadastrar |
| PUT | /empresas/:id | Atualizar |
| DELETE | /empresas/:id | Remover |

Vagas

| Método | Rota | Descrição |
|---|---|---|
| GET | /vagas | Listar todas |
| GET | /vagas/abertas | Listar somente vagas abertas |
| GET | /vagas/:id | Buscar por ID |
| POST | /vagas | Cadastrar |
| PUT | /vagas/:id | Atualizar |
| DELETE | /vagas/:id | Remover |

Candidaturas

| Método | Rota | Descrição |
|---|---|---|
| GET | /candidaturas | Listar todas |
| GET | /candidaturas/:id | Buscar por ID |
| GET | /candidaturas/aluno/:alunoId | Listar por aluno |
| GET | /candidaturas/vaga/:vagaId | Listar por vaga |
| POST | /candidaturas | Criar candidatura |
| PATCH | /candidaturas/:id/status | Atualizar status |

Notificações

| Método | Rota | Descrição |
|---|---|---|
| GET | /notificacoes/aluno/:alunoId | Listar por aluno |
| PATCH | /notificacoes/:id/lida | Marcar como lida |

Códigos HTTP utilizados:

| Código | Significado | Quando usar |
|---|---|---|
| 200 | OK | GET e PUT com sucesso |
| 201 | Created | POST com sucesso |
| 204 | No Content | DELETE com sucesso |
| 400 | Bad Request | Dados inválidos (Zod) |
| 401 | Unauthorized | Login incorreto |
| 403 | Forbidden | Sem permissão (ex: aluno não apto) |
| 404 | Not Found | Recurso não encontrado |
| 409 | Conflict | Dado duplicado |
| 500 | Internal Server Error | Erro inesperado |

🧭 Rotas do Front-end (PHP)

| Rota | Descrição |
|---|---|
| / | Página inicial (home) |
| /vagas | Lista pública de vagas |
| /login | Login do aluno |
| /empresaLogin | Login da empresa |
| /empresa | Lista de empresas parceiras |
| /painelAluno | Painel do aluno (requer login) |
| /minhasCandidaturas | Candidaturas do aluno (requer login) |
| /painelEmpresa | Painel da empresa (requer login) |
| /novaVaga | Criar nova vaga (empresa) |
| /candidatos | Ver candidatos da empresa |
| /editarVaga | Editar uma vaga existente |
| /excluirVaga | Excluir uma vaga |
| /candidatar | Aluno se candidata a uma vaga |
| /atualizarCandidatura | Empresa aprova/reprova candidato |
| /logout | Encerra a sessão e volta para home |

📁 Estrutura do Projeto

Node.js (API)

node/src/
├── config/          → configuração do banco de dados
├── controllers/     → recebe e responde requisições HTTP
├── services/        → regras de negócio
├── repositories/    → acesso ao banco de dados
├── models/          → entidades do banco (TypeORM)
├── routes/          → definição das rotas
├── middlewares/     → validação Zod e tratamento de erros
├── validations/     → schemas de validação Zod
├── migrations/      → versionamento do banco de dados
├── seeds/           → dados iniciais do banco
├── errors/          → classes de erro customizadas
├── app.ts           → configuração do Express
└── server.ts        → inicialização do servidor

PHP (Front-end)

php/
├── agents/          → documentação para manutenção (estrutura.md, regras.md)
├── assets/          → css e imagens
├── classes/
│   ├── enum/        → StatusVaga, StatusEmpresa, StatusCandidaturas
│   ├── Usuario.php  → classe abstrata base (Aluno e Empresa estendem)
│   ├── Aluno.php
│   ├── Empresa.php
│   ├── Vaga.php
│   └── Candidatura.php
├── Providers/
│   ├── ApiClient.php    → comunicação HTTP com a API Node
│   └── RenderViews.php  → busca dados e renderiza as páginas
├── views/
│   ├── aluno/
│   ├── empresa/
│   └── layouts/
├── .htaccess        → redireciona tudo para o index.php (URLs amigáveis)
└── index.php        → front controller, ponto de entrada do site

Java (Back Office)

java/src/main/java/
├── model/   → entidades (Aluno, Empresa, Vaga, Candidatura, EntidadeBase)
├── dao/     → acesso ao banco via JDBC (DaoGenerico<T> e implementações)
├── service/ → regras de negócio (validações antes de salvar)
├── gui/     → telas Swing (PainelBase e telas específicas)
└── Main.java → ponto de entrada da aplicação desktop

👥 Integrantes da Equipe

| Integrante | Responsabilidade |
|---|---|
| Hiago Freitas Rissatto | API Node.js (TypeScript, Express, TypeORM, Zod) |
| Wagner Da Silva Junior | Front-end PHP (Portal do Aluno e Painel da Empresa) |
| Danilo Augusto Maia | Back Office Java (Swing, Maven, MySQL) |
| Adrian Arcanjo | Back Office Java (Swing, Maven, MySQL) |

📝 Scripts Disponíveis (Node.js)

npm run dev                 # inicia em modo desenvolvimento
npm run build                # compila TypeScript
npm run seed                 # popula o banco com dados iniciais
npm run migration:generate   # gera nova migration baseada nos models
npm run migration:run        # executa migrations pendentes
npm run migration:revert     # reverte a última migration
