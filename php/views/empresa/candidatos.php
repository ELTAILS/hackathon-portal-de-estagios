<?php 
    if (!isset($_SESSION['usuario']) || !($_SESSION['usuario'] instanceof Empresa)) {
        header('Location: ' . BASE_URL . 'empresaLogin');
        exit;
    }

    $empresa = $_SESSION['usuario'];
?>
<section id="candidatos" class="dashboard-panel">
    <aside id="sidebar" class="dashboard-sidebar">
        <div class="sidebar-header">
            <p class="eyebrow">Painel da empresa</p>
            <h2 class="h4 mb-1">Nome da empresa</h2>
            <p class="text-muted small mb-0">Gerencie candidatos e vagas de forma organizada.</p>
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
                <p class="eyebrow mb-1">Área de gestão</p>
                <h1 class="h2 mb-1">Candidatos</h1>
                <h4 class="text-muted mb-0">Veja os candidatos que se inscreveram para suas vagas de estágio.</h4>
            </div>
        </div>

        <div class="table-responsive dashboard-table">
            <table class="table table-striped mb-0 align-middle">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">RA</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Vaga</th>
                        <th scope="col">Ativo</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (isset($candidatos) && !empty($candidatos)): ?>
                        <?php foreach ($candidatos as $candidatura): ?>
                            <?php $aluno = $candidatura['aluno'] ?? []; ?>
                            <tr>
                                <th scope="row"><?= htmlspecialchars($aluno['nome'] ?? '---') ?></th>
                                <td><?= htmlspecialchars($aluno['email'] ?? '---') ?></td>
                                <td><?= htmlspecialchars($aluno['ra'] ?? '---') ?></td>
                                <td><?= htmlspecialchars($aluno['curso'] ?? '---') ?></td>
                                <td><?= htmlspecialchars($candidatura['vaga_titulo'] ?? '---') ?></td>
                                <td>
                                    <span class="badge <?= (!empty($aluno['ativo']) ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis') ?>">
                                        <?= !empty($aluno['ativo']) ? 'Ativo' : 'Inativo' ?>
                                    </span>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="6" class="text-center py-4">Nenhum candidato encontrado para suas vagas ainda.</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </main>
</section>