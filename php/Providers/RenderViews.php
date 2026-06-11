<?php

final class RenderViews
{
    public function render(string $view, string $titulo/*, array $data = [] */): void
    {
        $title = $titulo;
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
        $this->render('vagas', 'Vagas de estágio');
    }

    public function login(): void
    {
        $this->render('login', 'Faça o seu login');
    }

        public function empresa(): void
        {
            $this->render('empresa', 'Sobre as nossas empresas de parceria');
        }

}