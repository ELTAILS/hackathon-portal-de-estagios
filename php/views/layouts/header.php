<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portal de Estágios para Hackathons, conectando estudantes talentosos a oportunidades de estágio em empresas inovadoras. Encontre estágios emocionantes, participe de hackathons e impulsione sua carreira no mundo da tecnologia.">
    <!--Link boostrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <!--Link font awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!---Link CSS interno-->
    <link rel="stylesheet" href="<?= BASE_URL ?>assets/css/style.css">
    <link rel="stylesheet" href="<?= BASE_URL ?>assets/css/media.css">
    <link rel="shortcut icon" href="<?= BASE_URL ?>assets/imgs/favicon.ico" type="image/x-icon">
    <title><?= $title ?? 'UniAlfa estágios'?></title>
</head>
<body>
    
<header id="header">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-2" href="<?= BASE_URL ?>">
                <img style="width: 175px;" src="<?= BASE_URL ?>assets/imgs/logo.png" alt="Portal de Estágios UniAlfa">
            </a>

            <!-- Botão para menu mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse header-nav" id="navbarScroll">
                <ul class="navbar-nav mx-auto my-2 my-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="<?= BASE_URL ?>vagas">Vagas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= BASE_URL ?>empresa">Empresas</a>
                    </li>
                </ul>

                <!--Valida se o usuario Está logado-->
                <?php if (isset($_SESSION['usuario'])): ?>
                    <div class="d-flex align-items-center gap-3">
                        <!--Mostra o nome do usuario-->
                        <span class="user-name"><strong><?= substr(htmlspecialchars($_SESSION['usuario']->getNome()), 0, 9) ?></strong></span>
                        <!--Valida se o usuario tem o objeto aluno, provando que é aluno-->
                        <?php if($_SESSION['usuario'] instanceof Aluno):?>
                            <a href="<?= BASE_URL ?>painelAluno" class="btn btn-outline-light">Painel Aluno</a>
                        <?php else:?> <!--Se não é aluno é empresa-->
                            <a href="<?= BASE_URL ?>painelEmpresa" class="btn btn-outline-light">Painel Empresa</a>
                        <?php endif;?>
                        <!--Botão de sair-->
                        <a href="<?= BASE_URL ?>logout" class="btn btn-outline-light">Sair</a>
                    </div>
                <!--Caso o usuario não tiver logado-->
                <?php else: ?>
                    <div class="navbar-nav my-2 my-lg-0 align-items-center gap-2">
                        <a class="btn btn-portal text-white px-4 w-100" href="<?= BASE_URL?>login">Entrar</a>
                    </div>
                <?php endif; ?>

            </div>
        </div>
    </nav>
</header>

<!--Faz preencher todo a tela-->
<main style="flex:1;">