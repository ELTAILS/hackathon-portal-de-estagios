<?php

require_once __DIR__ . "/../classes/Vaga.php";
require_once __DIR__ . "/../classes/Empresa.php";
require_once __DIR__ . "/../classes/Vaga.php";
require_once __DIR__ . "/../classes/Aluno.php";
require_once __DIR__ . "/ApiClient.php";

final class RenderViews
{
    public function render(string $view, string $titulo, array $data = []): void
    {
        $title = $titulo;
        extract($data); // Extrai as chaves do array $data como variáveis
        include_once __DIR__ . "/../views/layouts/header.php";
        include_once __DIR__ . "/../views/{$view}.php";
        include_once __DIR__ . "/../views/layouts/footer.php";
    }

    public function home(): void
    {
        $this->render('home', 'Pagina inicial');
    }

    public function erro(): void
    {
        $this->render('erro', 'Ops.. Pagina não encontrada');
    }

    public function vagas(): void
    {
        $dados = ApiClient::get('/vagas');
        
        $vagas = [];
        foreach($dados as $d){
            $vagas[] = new Vaga(
                $d['id'],
                $d['titulo'],
                $d['descricao'],
                $d['area'],
                $status = StatusVaga::from($d['status'])
            );
        }

        $this->render('vagas', 'Vagas de estágio', ['vagas' => $vagas]);

    }

    public function login(): void
    {
        $this->render('aluno/login', 'Faça o seu login');
    }

    public function empresaLogin(): void
    {
        $this->render('empresa/empresaLogin', 'Login de empresa');
    }

    public function empresa(): void
    {
        $dados = ApiClient::get('/empresas');

        $empresas = [];
        foreach($dados as $d){
            $empresas[] = new Empresa(
                $d['id'],
                $d['nome'],
                '',
                ''
            );
        }

        $this->render('empresa', 'Sobre as nossas empresas de parceria', ['empresas' => $empresas]);
    }

    public function painelAluno(): void
    {
        $this->render('aluno/painelAluno', 'Bem vindo aluno ao seu painel de estagios');
    }

    public function minhasCanditaturas(): void 
    {
        $this->render('aluno/minhasCanditaturas', 'Minhas canditaturas');
    }
    
    public function painelEmpresa(): void
    {
        $this->render('empresa/painelEmpresa', 'Bem vindo ao painel de empresas');
    }

    public function novaVaga(): void
    {
        $this->render('empresa/novaVaga', 'Crie uma nova vaga de estágio');
    }

    public function candidatos(): void
    {
        $this->render('empresa/candidatos', 'Lista de candidatos para suas vagas');
    }

    public function editarVaga(): void
    {
        $this->render('empresa/editarVaga', 'Edite as informações da vaga de estágio');
    }

}