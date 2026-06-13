<section id="painelEmpresa" class="dashboard-panel">
    <aside id="sidebar" class="dashboard-sidebar">
        <div class="sidebar-header">
            <p class="eyebrow">Painel da empresa</p>
            <h2 class="h4 mb-1">Nome da empresa</h2>
            <p class="text-muted small mb-0">Gerencie vagas e candidatos em um só lugar.</p>
        </div>

        <div class="d-grid gap-2 mt-4">
            <a href="#" class="btn btn-home-primary">Candidatos</a>
            <a href="<?= BASE_URL ?>painelEmpresa" class="btn btn-home-primary">Vagas postadas</a>
            <a href="#" class="btn btn-home-outline">Nova vaga</a>
        </div>
    </aside>

    <main class="dashboard-main">
        <div class="dashboard-topbar">
            <div>
                <p class="eyebrow mb-1">Resumo</p>
                <h1 class="h2 mb-1">Vagas</h1>
                <h4 class="text-muted mb-0">Gerencie as vagas de estágio da sua empresa.</h4>
            </div>
            <a href="#" class="btn btn-home-primary">+ Nova vaga</a>
        </div>

        <div class="row g-3 dashboard-cards mb-4">
            <div class="col-12 col-md-4">
                <article class="dashboard-card">
                    <p>Total de vagas</p>
                    <strong>12</strong>
                </article>
            </div>
            <div class="col-12 col-md-4">
                <article class="dashboard-card">
                    <p>Total de candidatos</p>
                    <strong>40</strong>
                </article>
            </div>
            <div class="col-12 col-md-4">
                <article class="dashboard-card">
                    <p>Vagas inativas</p>
                    <strong>2</strong>
                </article>
            </div>
        </div>

        <div class="table-responsive dashboard-table">
            <table class="table table-striped mb-0 align-middle">
                <thead>
                    <tr>
                        <th scope="col">Vaga</th>
                        <th scope="col">Área</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Candidatos</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <?php for($i = 0; $i < 6; $i++):?>
                        <tr>
                            <th scope="row">Estágio front-end</th>
                            <td>Tecnologia</td>
                            <td><span class="badge bg-success-subtle text-success-emphasis">Ativa</span></td>
                            <td>10</td>
                            <td class="aberta d-flex gap-3">
                                <a href="#" aria-label="Editar vaga">
                                    <i class="fa-solid fa-pencil"></i>
                                </a>
                                <a href="#" aria-label="Excluir vaga">
                                    <i class="fa-solid fa-trash-can"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endfor;?>
                </tbody>
            </table>
        </div>
    </main>
</section>