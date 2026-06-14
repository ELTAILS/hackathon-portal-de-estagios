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
            <a href="<?=BASE_URL?>minhasCanditaturas" class="btn btn-home-primary px-4 py-2">
                Ver minhas canditaduras
            </a>
        </div>

        <?php for ($i = 0; $i < 6; $i++): ?>
            <div class="job-card mb-5">
                <div class="d-flex gap-3">

                    <div class="d-flex flex-column align-items-center">
                        <div class="company-logo">A</div>
                        <span class="company-name">Empresa Alfa</span>
                    </div>

                    <div class="flex-grow-1">
                        <div class="d-flex flex-column flex-md-row gap-3">

                            <div class="flex-grow-1">
                                <p class="job-title">Estágio em Marketing Digital</p>

                                <div class="d-flex flex-wrap gap-3 mb-2">
                                    <span class="meta-item">◇ Marketing</span>
                                    <span class="meta-item">⊙ Goiânia - GO</span>
                                    <span class="meta-item">▣ Híbrido</span>
                                </div>

                                <p class="job-desc">Apoiar nas estratégias de marketing digital, gestão de redes sociais, análise de métricas e criação de conteúdo.</p>
                                <div class="d-flex flex-wrap gap-2">
                                    <span class="badge-tag">Bolsa R$ 1.200,00</span>
                                    <span class="badge-tag">Carga horária: 6h/dia</span>
                                </div>
                            </div>

                            <div class="d-flex flex-column align-items-md-end align-items-start">
                                <span class="published mb-2">Publicada há 1 dia</span>
                                <button class="btn-candidatar">Candidatar-se</button>
                                <button class="btn-detalhes">Ver detalhes</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        <?php endfor; ?>

    </div>
</section>