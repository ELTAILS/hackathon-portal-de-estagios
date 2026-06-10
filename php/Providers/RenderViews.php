<?php

final class RenderViews
{
    public function render(string $view, string $title/*, array $data = [] */): void
    {
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

}