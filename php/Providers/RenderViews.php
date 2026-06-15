<?php

require_once __DIR__ . "/../classes/Vaga.php";
require_once __DIR__ . "/../classes/Empresa.php";
require_once __DIR__ . "/../classes/Vaga.php";
require_once __DIR__ . "/../classes/Aluno.php";
require_once __DIR__ . "/../classes/Candidatura.php";
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
                (int) $d['id'],
                $d['titulo'],
                $d['descricao'],
                $d['area'],
                $status = StatusVaga::from($d['status']),
                (int) $d['empresa']['id']
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
                (int)$d['id'],
                $d['nome'],
                '',
                ''
            );
        }

        $this->render('empresa', 'Sobre as nossas empresas de parceria', ['empresas' => $empresas]);
    }

    public function painelAluno(): void
    {
        if(!($_SESSION['usuario'] instanceof Aluno)){
            header('Location: ' . BASE_URL . 'login');
            exit;
        }

        $dados = ApiClient::get('/vagas');

        $vagas = [];

        foreach ($dados as $d) {
            $vagas[] = new Vaga(
                (int) $d['id'],
                $d['titulo'],
                $d['descricao'],
                $d['area'],
                StatusVaga::from($d['status']),
                (int) $d['empresa']['id']
            );
        }

        $candidaturasPorVaga = [];

        if (isset($_SESSION['usuario']) && $_SESSION['usuario'] instanceof Aluno) {
            $alunoId = (int) $_SESSION['usuario']->getId();
            $candidaturas = ApiClient::get("/candidaturas/aluno/" . $alunoId);

            foreach ($candidaturas as $candidatura) {
                $vagaId = (int) ($candidatura['vaga_id'] ?? $candidatura['vaga']['id'] ?? 0);

                if ($vagaId > 0) {
                    $candidaturasPorVaga[$vagaId] = true;
                }
            }
        }

        $this->render('aluno/painelAluno', 'Bem vindo aluno ao seu painel de estagios', ['vagas' => $vagas,'candidaturasPorVaga' => $candidaturasPorVaga,]);
    }

    public function minhasCandidaturas(): void 
    {
        if(!($_SESSION['usuario'] instanceof Aluno)){
            header('Location: ' . BASE_URL . 'login');
            exit;
        }

        $dados = ApiClient::get('/candidaturas');

        $alunoId = (int) $_SESSION['usuario']->getId();
        $vagaId  = isset($_GET['id']) ? (int) $_GET['id'] : 0;

        $candidaturas = [];

        foreach($dados as $d){
            $candidaturas[] = new Candidatura(
                (int) $d['id'],
                $status = StatusCandidaturas::from($d['status']),
                $d['data_candidatura'],
                $aluno_id = $alunoId,
                $vaga_id = $vagaId
            );
        }

        $dados = ApiClient::get('/vagas');
            
        $vagas = [];

        foreach($dados as $d){
            $vagas[] = new Vaga(
                (int) $d['id'],
                $d['titulo'],
                $d['descricao'],
                $d['area'],
                $status = StatusVaga::from($d['status']),
                (int) $d['empresa']['id']
            );
        }

        $this->render('aluno/minhasCandidaturas', 'Minhas candidaturas', ['vagas' => $vagas, 'candidaturas' => $candidaturas]);
    }
    
    public function painelEmpresa(): void
    {
        if (!($_SESSION['usuario'] instanceof Empresa)) {
            header('Location: ' . BASE_URL . 'empresaLogin');
            exit;
        }

        $dados = ApiClient::get('/vagas');
            
        $vagas = [];
        $empresaId = (int) $_SESSION['usuario']->getId();

        foreach($dados as $d){

            if($empresaId !== $d['empresa']['id']) continue; // Filtra apenas as vagas da empresa logada

            $vagas[] = new Vaga(
                (int) $d['id'],
                $d['titulo'],
                $d['descricao'],
                $d['area'],
                $status = StatusVaga::from($d['status']),
                (int) $d['empresa']['id']
            );
        }

        $this->render('empresa/painelEmpresa', 'Bem vindo ao painel de empresas', ['vagas' => $vagas]);
    }

    public function novaVaga(): void
    {
        if (!($_SESSION['usuario'] instanceof Empresa)) {
            header('Location: ' . BASE_URL . 'empresaLogin');
            exit;
        }

        $mensagem = '';

        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            
            $post = [
                'titulo' => $_POST['titulo'] ?? '',
                'descricao' => $_POST['descricao'] ?? '',
                'area' => $_POST['area'] ?? '',
                'status' => $_POST['status'] ?? '',
                'empresaId' => (int) $_SESSION['usuario']->getId()
            ];

            try {
                ApiClient::post('/vagas', $post);
                $mensagem = "Vaga criada com sucesso!";
            } catch(Exception $e) {
                throw new Exception("Erro ao criar vaga " . $e->getMessage());
            }
        }

        $this->render('empresa/novaVaga', 'Crie uma nova vaga de estágio', ['mensagem' => $mensagem]);
    }

    public function candidatos(): void
    {
        if (!($_SESSION['usuario'] instanceof Empresa)) {
            header('Location: ' . BASE_URL . 'empresaLogin');
            exit;
        }

        $empresaId = (int) $_SESSION['usuario']->getId();
        $dados = ApiClient::get('/vagas');

        $vagasEmpresa = [];
        foreach ($dados as $d) {
            if ((int) $d['empresa']['id'] !== $empresaId) {
                continue;
            }
            $vagasEmpresa[(int) $d['id']] = $d['titulo'];
        }

        $candidatos = [];
        foreach ($vagasEmpresa as $vagaId => $vagaTitulo) {
            $dadosCandidatos = ApiClient::get('/candidaturas/vaga/' . $vagaId);
            foreach ($dadosCandidatos as $candidatura) {
                $candidatura['vaga_titulo'] = $vagaTitulo;
                $candidatos[] = $candidatura;
            }
        }

        $this->render('empresa/candidatos', 'Lista de candidatos para suas vagas', ['candidatos' => $candidatos]);
    }

    public function editarVaga(): void
    {
        if (!($_SESSION['usuario'] instanceof Empresa)) {
            header('Location: ' . BASE_URL . 'empresaLogin');
            exit;
        }

        $mensagem = '';
        $id = (int) ($_GET['id'] ?? 0);

        // Busca a vaga atual (necessário tanto pro GET quanto pra validar no POST)
        $dadosVaga = ApiClient::get("/vagas/{$id}");

        if (empty($dadosVaga)) {
            throw new Exception("Vaga não encontrada");
        }

        // 3. Verifica se a vaga pertence à empresa logada
        if ((int) $dadosVaga['empresaId'] !== (int) $_SESSION['usuario']->getId()) {
            header('Location: ' . BASE_URL . 'painelEmpresa');
            exit;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $post = [
                'titulo'    => $_POST['titulo'] ?? '',
                'descricao' => $_POST['descricao'] ?? '',
                'area'      => $_POST['area'] ?? '',
                'status'    => $_POST['status'] ?? '',
                'empresaId' => (int) $_SESSION['usuario']->getId()
            ];

            try {
                ApiClient::put("/vagas/{$id}", $post);
                $mensagem = "Vaga editada com sucesso!";
                $dadosVaga = array_merge($dadosVaga, $post); // atualiza pra exibir os novos valores
            } catch (Exception $e) {
                throw new Exception("Erro ao editar vaga " . $e->getMessage());
            }
        }

        $this->render('empresa/editarVaga', 'Edite as informações da vaga de estágio', [
            'mensagem' => $mensagem,
            'vaga' => $dadosVaga,
            'id' => $id
        ]);
    }

    public function excluirVaga(): void
    {
        if(!($_SESSION['usuario'] instanceof Empresa)){
            header('Location: ' . BASE_URL . 'empresaLogin');
            exit;
        }

        $id = (int) $_GET['id'] ?? '';

        try {
            ApiClient::delete("/vagas/{$id}");
        } catch(Exception $e){
            throw new Exception("Erro ao excluir vaga " . $e->getMessage());
        }
         
        header('Location: ' . BASE_URL . 'painelEmpresa');
        exit;

    }

    public function candidatar(): void
    {

        if(!($_SESSION['usuario'] instanceof Aluno)){
            header('Location: ' . BASE_URL . 'login');
            exit;
        }

        $post = [
            'alunoId' => (int) $_SESSION['usuario']->getId(),
            'vagaId'  => isset($_GET['id']) ? (int) $_GET['id'] : 0
        ];

        try{
            ApiClient::post("/candidaturas", $post);
        } catch(Exception $e){
            throw new Exception("Erro ao se candidatar " . $e->getMessage());
        }

        header('Location: ' . BASE_URL . 'minhasCandidaturas');
        exit;

    }

}