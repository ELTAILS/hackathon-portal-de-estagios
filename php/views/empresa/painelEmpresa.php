<?php 
    if (!isset($_SESSION['usuario']) || !($_SESSION['usuario'] instanceof Empresa)) {
        header('Location: ' . BASE_URL . 'empresaLogin');
        exit;
    }

    $empresa = $_SESSION['usuario'];
?>
<section id="painelEmpresa" class="dashboard-panel">
    <aside id="sidebar" class="dashboard-sidebar">
        <div class="sidebar-header">
            <p class="eyebrow">Painel da empresa</p>
            <h2 class="h4 mb-1">Nome da empresa</h2>
            <p class="text-muted small mb-0">Gerencie vagas e candidatos em um só lugar.</p>
        </div>

        <div class="d-grid gap-2 mt-4">
            <a href="<?= BASE_URL ?>candidatos" class="btn btn-home-primary">Candidatos</a>
            <a href="<?= BASE_URL ?>painelEmpresa" class="btn btn-home-primary">Vagas postadas</a>
            <a href="<?= BASE_URL ?>novaVaga" class="btn btn-home-outline">Nova vaga</a>
        </div>
    </aside>

    <main class="dashboard-main">
        <div class="dashboard-topbar">
            <div>
                <p class="eyebrow mb-1">Resumo</p>
                <h1 class="h2 mb-1">Vagas</h1>
                <h4 class="text-muted mb-0">Gerencie as vagas de estágio da sua empresa.</h4>
            </div>
            <a href="<?= BASE_URL ?>novaVaga" class="btn btn-home-primary">+ Nova vaga</a>
        </div>

        <div class="table-responsive dashboard-table">
            <table class="table table-striped mb-0 align-middle">
                <thead>
                    <tr>
                        <th scope="col">Vaga</th>
                        <th scope="col">Área</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (!empty($vagas)): ?>
                        <?php foreach ($vagas as $vaga): ?>
                            <tr>
                                <th scope="row"><?= htmlspecialchars($vaga->getTitulo()) ?></th>
                                <td><?= htmlspecialchars($vaga->getArea()) ?></td>
                                <td>
                                    <span class="badge bg-success-subtle text-success-emphasis">
                                        <?= $vaga->getStatus()->value ?>
                                    </span>
                                </td>
                                <td>
                                    <div class="d-flex gap-3">
                                        <a href="<?= BASE_URL ?>editarVaga?id=<?= $vaga->getId() ?>" aria-label="Editar vaga">
                                            <i class="fa-solid fa-pencil"></i>
                                        </a>
                                        <a href="<?= BASE_URL ?>excluirVaga?id=<?= $vaga->getId() ?>" 
                                        aria-label="Excluir vaga"
                                        onclick="return confirm('Tem certeza que deseja excluir esta vaga?')">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="5" class="text-center py-5">
                                <h1>Nenhuma vaga registrada</h1>
                                <p>Tem alunos doidos pra trabalhar na sua empresa, bora chamar alguns? Crie uma vaga :)</p>
                            </td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </main>
</section>