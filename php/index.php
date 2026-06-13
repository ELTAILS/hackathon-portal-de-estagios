<?php
//Define a URL do site
define('BASE_URL', 'http://localhost/hackathon-portal-de-estagios/php/');

// Require e providers do projeto
require_once __DIR__ . '/Providers/RenderViews.php';
require_once __DIR__ . '/Providers/JsonDecoder.php';

$jsonDecore = new JsonDecoder;
$renderView = new RenderViews;

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
    default:
        $renderView->erro();
        break;
}