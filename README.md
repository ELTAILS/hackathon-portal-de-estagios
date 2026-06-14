# 🎓 Portal de Estágios UniALFA — API Node.js

API RESTful desenvolvida em Node.js + TypeScript para o hackathon institucional da Faculdade UniALFA, responsável por centralizar toda a lógica de negócio do Portal de Estágios.

---

## 📋 Sobre o Projeto

O Portal de Estágios UniALFA é uma plataforma que conecta alunos da faculdade a empresas da região que buscam novos talentos. Esta API é o coração do sistema, fornecendo endpoints para vagas, candidaturas e notificações automáticas.

---

## 🏗️ Arquitetura do Sistema

```
Java (Back Office)  →  acesso direto ao banco
PHP (Front-end)     →  consome esta API
Node.js (API)       →  motor do sistema
MySQL               →  banco de dados
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — plataforma de execução
- **TypeScript** — linguagem
- **Express** — framework HTTP
- **TypeORM** — ORM para banco de dados
- **MySQL** — banco de dados relacional
- **Zod** — validação de dados
- **Nodemon** — reinício automático em desenvolvimento
- **CORS** — liberação de acesso entre origens

---

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js instalado
- MySQL rodando localmente

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/ELTAILS/hackathon-portal-de-estagios.git

# 2. Entre na pasta do projeto Node
cd hackathon-portal-de-estagios/node

# 3. Instale as dependências
npm install

# 4. Configure o banco de dados em src/config/database.ts
# Altere username e password conforme seu ambiente

# 5. Crie o banco de dados no MySQL
CREATE DATABASE portal_estagio;

# 6. Execute as migrations
npm run migration:run

# 7. Execute as seeds (dados iniciais)
npm run seed

# 8. Inicie o servidor
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

---

## 🗄️ Banco de Dados

```
alunos        → cadastro de alunos
empresas      → cadastro de empresas
vagas         → vagas de estágio
candidaturas  → candidaturas dos alunos
notificacoes  → notificações automáticas
```

---

## 📡 Endpoints da API

### Alunos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/alunos` | Listar todos |
| GET | `/alunos/:id` | Buscar por ID |
| POST | `/alunos` | Cadastrar |
| PUT | `/alunos/:id` | Atualizar |
| DELETE | `/alunos/:id` | Remover |

### Empresas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/empresas` | Listar todas |
| GET | `/empresas/:id` | Buscar por ID |
| POST | `/empresas` | Cadastrar |
| PUT | `/empresas/:id` | Atualizar |
| DELETE | `/empresas/:id` | Remover |

### Vagas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/vagas` | Listar todas |
| GET | `/vagas/abertas` | Listar abertas |
| GET | `/vagas/:id` | Buscar por ID |
| POST | `/vagas` | Cadastrar |
| PUT | `/vagas/:id` | Atualizar |
| DELETE | `/vagas/:id` | Remover |

### Candidaturas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/candidaturas` | Listar todas |
| GET | `/candidaturas/:id` | Buscar por ID |
| GET | `/candidaturas/aluno/:alunoId` | Listar por aluno |
| GET | `/candidaturas/vaga/:vagaId` | Listar por vaga |
| POST | `/candidaturas` | Criar candidatura |
| PATCH | `/candidaturas/:id/status` | Atualizar status |

### Notificações
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/notificacoes/aluno/:alunoId` | Listar por aluno |
| PATCH | `/notificacoes/:id/lida` | Marcar como lida |

---

## 📁 Estrutura do Projeto

```
src/
├── config/          → configuração do banco de dados
├── controllers/     → recebe e responde requisições HTTP
├── services/        → regras de negócio
├── repositories/    → acesso ao banco de dados
├── models/          → entidades do banco
├── routes/          → definição das rotas
├── middlewares/     → validação e tratamento de erros
├── validations/     → schemas Zod
├── migrations/      → versionamento do banco
├── seeds/           → dados iniciais
├── errors/          → classes de erro customizadas
├── app.ts           → configuração do Express
└── server.ts        → inicialização do servidor
```

---

## 👥 Integrantes da Equipe

| Integrante | Responsabilidade |
|------------|-----------------|
| **Hiago Freitas Rissatto** | API Node.js (TypeScript, Express, TypeORM, Zod) |
| **Wagner Da Silva Junior** | Front-end PHP (Portal do Aluno e Painel da Empresa) |
| **Danilo Augusto Maia** | Back Office Java (Swing, Maven, MySQL) |
| **Adrian Arcanjo** | Back Office Java (Swing, Maven, MySQL) |

---

## 📝 Scripts Disponíveis

```bash
npm run dev              # inicia em modo desenvolvimento
npm run build            # compila TypeScript
npm run seed             # popula o banco com dados iniciais
npm run migration:generate  # gera nova migration
npm run migration:run       # executa migrations pendentes
npm run migration:revert    # reverte última migration
```