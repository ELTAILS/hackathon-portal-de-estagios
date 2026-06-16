<?php 
    if (!isset($_SESSION['usuario']) || !($_SESSION['usuario'] instanceof Aluno)) {
        header('Location: ' . BASE_URL . 'login');
        exit;
    }

    $aluno = $_SESSION['usuario'];
?>
<section id="painel-aluno" class="py-5">
    <div class="container">
        <h1 class="h1">Vagas de estágios</h1>
        <h4 class="text-muted mb-4">Encontre oportunidades que combinam com seu perfil.</h4>

        <div class="text-center w-100 mb-5">
            <a href="<?=BASE_URL?>minhasCandidaturas" class="btn btn-home-primary px-4 py-2">
                Ver minhas candidaturas
            </a>
        </div>

        <?php if (isset($vagas) && !empty($vagas)): ?>
            <?php foreach ($vagas as $vaga): ?>
                <article class="job-card mb-4">
                    <div class="d-flex gap-3">
                        <div class="d-flex flex-column align-items-center">
                            <div class="company-logo">V</div>
                            <span class="company-name">Vaga da Aluninhos</span>
                        </div>

                        <div class="flex-grow-1">
                            <div class="d-flex flex-column flex-md-row gap-3">
                                <div class="flex-grow-1">
                                    <p class="job-title"><?= htmlspecialchars($vaga->getTitulo()) ?></p>

                                    <div class="d-flex flex-wrap gap-3 mb-2">
                                        <span class="meta-item">◇ <?= htmlspecialchars($vaga->getArea()) ?></span>
                                        <span class="meta-item">⊙ Status: <?= htmlspecialchars((string) $vaga->getStatus()->value) ?></span>
                                    </div>

                                    <p class="job-desc"><?= htmlspecialchars($vaga->getDescricao()) ?></p>

                                    <div class="d-flex flex-wrap gap-2">
                                        <span class="badge-tag">Área: <?= htmlspecialchars($vaga->getArea()) ?></span>
                                        <span class="badge-tag">Situação: <?= htmlspecialchars((string) $vaga->getStatus()->value) ?></span>
                                    </div>
                                </div>

                                <div class="d-flex flex-column align-items-md-end align-items-start">
                                    <?php $jaCandidatou = isset($candidaturasPorVaga[$vaga->getId()]); ?>

                                    <span class="published mb-2">
                                        <?= $jaCandidatou ? 'Você já se candidatou a esta vaga.' : 'Vaga disponível para candidatura' ?>
                                    </span>

                                    <?php if ($jaCandidatou): ?>
                                        <span class="badge-tag mb-2">Candidatura já enviada</span>
                                        <a href="<?= BASE_URL ?>minhasCandidaturas" class="btn-detalhes text-center">Ver minhas candidaturas</a>

                                    <?php elseif ($vaga->getStatus() === StatusVaga::ABERTA): ?>
                                        <a href="<?= BASE_URL . 'candidatar?id=' . $vaga->getId(); ?>" class="btn-candidatar text-decoration-none text-center">
                                            Candidatar-se
                                        </a>
                                        <a href="<?= BASE_URL ?>vagas" class="btn-detalhes text-center">Ver detalhes</a>

                                    <?php else: ?>
                                        <button class="btn-candidatar" type="button" disabled>Fechada</button>
                                        <a href="<?= BASE_URL ?>vagas" class="btn-detalhes text-center">Ver detalhes</a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        <?php else: ?>
            <div class="text-center mt-5 mb-5">
                <h1>Nenhuma vaga disponível atualmente</h1>
                <p>Veja essa página novamente mais tarde.</p>
            </div>
        <?php endif; ?>
    </div>
</section>