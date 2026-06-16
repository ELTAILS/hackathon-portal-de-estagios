Portal de Estágios UniALFA — conecta alunos a vagas de estágio de empresas locais.
Arquitetura distribuída: Java Swing (backoffice) + Node.js (API) + PHP (web) + MySQL (banco).

Banco de Dados
alunos — cadastro + flag apto (liberado pelo Java)
empresas — cadastro + status: pendente | aprovada | bloqueada (Java aprova)
vagas — pertence a uma empresa, status: aberta | encerrada
candidaturas — aluno + vaga + status: em_analise | aprovado | reprovado
notificacoes — gerada pelo Node ao mudar status da candidatura

PHP chama Node → Node consulta MySQL → devolve JSON → PHP renderiza na tela

Exemplo candidatura:
Aluno clica "Candidatar" no PHP
→ PHP faz POST /api/candidaturas
→ Node insere na tabela candidaturas
→ Node cria registro em notificacoes
→ PHP exibe confirmação ao aluno

O projeto é em equipe de 4 pessoas

1 - node
2 - PHP(EU)
3 e 4 - Java

O objetivo é criar um projeto que essas 3 tecnologias funciona.