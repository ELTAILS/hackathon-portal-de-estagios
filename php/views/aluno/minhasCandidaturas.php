<?php 
    if (!isset($_SESSION['usuario']) || !($_SESSION['usuario'] instanceof Aluno)) {
        header('Location: ' . BASE_URL . 'login');
        exit;
    }

    $aluno = $_SESSION['usuario'];
?>
<section id="minhasCandidaturas" class="py-5">
    <div class="container">
        <h1 class="h1">Minhas candidaturas</h1>
        <h4 class="text-muted mb-4">Aqui estão as vagas nas quais você se candidatou.</h4>

        <div class="text-center w-100 mb-5">
            <a href="<?=BASE_URL?>vagas" class="btn btn-home-primary px-4 py-2">
                Ver vagas disponíveis
            </a>
            <a href="<?=BASE_URL?>painelAluno" class="btn btn-home-primary px-4 py-2">
                Ver vagas
            </a>
        </div>

        <?php if (isset($candidaturas) && !empty($candidaturas)): ?>
            <?php foreach ($candidaturas as $candidatura): ?>
                <?php $vaga = $vagas[$candidatura->getVagaId()] ?? null; ?>

                <article class="job-card mb-4">
                    <div class="d-flex gap-3">
                        <div class="d-flex flex-column align-items-center">
                            <div class="company-logo">V</div>
                            <span class="company-name">Vaga da Aluninhos</span>
                        </div>

                        <div class="flex-grow-1">
                            <div class="d-flex flex-column flex-md-row gap-3">
                                <div class="flex-grow-1">
                                    <?php if ($vaga): ?>
                                        <p class="job-title"><?= htmlspecialchars($vaga->getTitulo()) ?></p>

                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <span class="meta-item">◇ <?= htmlspecialchars($vaga->getArea()) ?></span>
                                            <span class="meta-item">⊙ Status da vaga: <?= htmlspecialchars($vaga->getStatus()->value) ?></span>
                                        </div>

                                        <p class="job-desc"><?= htmlspecialchars($vaga->getDescricao()) ?></p>
                                    <?php else: ?>
                                        <p class="job-title">Vaga não encontrada (ID: <?= htmlspecialchars((string) $candidatura->getVagaId()) ?>)</p>
                                    <?php endif; ?>

                                    <div class="d-flex flex-wrap gap-2">
                                        <span class="badge-tag">Candidatura em: <?= htmlspecialchars($candidatura->getData()) ?></span>
                                        <span class="badge-tag">Status da candidatura: <?= htmlspecialchars($candidatura->getStatus()->value) ?></span>
                                    </div>
                                </div>

                                <div class="d-flex flex-column align-items-md-end align-items-start">
                                    <a href="<?= BASE_URL ?>vagas" class="btn-detalhes text-center" type="button">Ver detalhes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        <?php else: ?>
            <div class="text-center mt-5 mb-5">
                <h1>Nenhuma candidatura recebida ainda</h1>
                <p>Quando algum aluno se candidatar, ela aparecerá aqui.</p>
            </div>
        <?php endif; ?>
    </div>
</section>