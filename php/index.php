<?php
//Define a URL do site
define('BASE_URL', 'http://localhost/hackathon-portal-de-estagios/php/');

// Require e providers do projeto
require_once __DIR__ . '/Providers/RenderViews.php';
$renderView = new RenderViews;

//Starta a sessão se ainda não tiver sido iniciada
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$url = trim($_GET['url'] ?? '/');

//Define qual view pegar
switch($url){
    case '/':
        $renderView->home();
        break;
    case 'vagas':
        $renderView->vagas();
        break;
    case 'login':
        $renderView->login();
        break;
    case 'empresaLogin':
        $renderView->empresaLogin();
        break;
    case 'empresa':
        $renderView->empresa();
        break;
    case 'painelAluno':
        $renderView->painelAluno();
        break;
    case 'minhasCanditaturas':
        $renderView->minhasCanditaturas();
        break;
    case 'painelEmpresa':
        $renderView->painelEmpresa();
        break;
    case 'novaVaga':
        $renderView->novaVaga();
        break;
    case 'candidatos':
        $renderView->candidatos();
        break;
    case 'editarVaga':
        $renderView->editarVaga();
        break;
    case 'excluirVaga':
        $renderView->excluirVaga();
        break;
    case 'logout':
        $_SESSION = [];
        session_destroy();
        header('Location: ' . BASE_URL);
        break;
    default:
        $renderView->erro();
        break;
}