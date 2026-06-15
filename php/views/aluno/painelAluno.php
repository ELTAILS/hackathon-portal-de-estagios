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

        <div class="table-responsive">
            <table class="table table-striped rounded-4 table-vagas">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descricao</th>
                        <th scope="col">Area</th>
                        <th scope="col">Status</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (isset($vagas) && !empty($vagas)): ?>
                        <?php foreach ($vagas as $vaga): ?>
                            <tr>
                                <td><?= htmlspecialchars($vaga->getTitulo()) ?></td>
                                <td><?= htmlspecialchars($vaga->getDescricao()) ?></td>
                                <td><?= htmlspecialchars($vaga->getArea()) ?></td>
                                <td><?= htmlspecialchars($vaga->getStatus()->value) ?></td>
                                <td>
                                    <?php if ($vaga->getStatus() === StatusVaga::ABERTA): ?>
                                        <a href="<?= BASE_URL . 'candidatar/' . $vaga->getId(); ?>" class="btn btn-sm btn-primary">
                                            Candidatar-se
                                        </a>
                                    <?php else: ?>
                                        <span class="text-muted">Fechada</span>
                                    <?php endif; ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <div class="text-center mt-5 mb-5">
                            <h1>Nenhuma vaga disponível atualmente</h1>
                            <p>Veja essa página novamente mais tarde.</p>
                        </div>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</section>