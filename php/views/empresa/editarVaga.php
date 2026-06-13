<section id="editar-vaga" class="dashboard-panel">
    <aside id="sidebar" class="dashboard-sidebar">
        <div class="sidebar-header">
            <p class="eyebrow">Painel da empresa</p>
            <h2 class="h4 mb-1">Nome da empresa</h2>
            <p class="text-muted small mb-0">Gerencie suas vagas e atualize informações rapidamente.</p>
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
                <p class="eyebrow mb-1">Edição</p>
                <h1 class="h2 mb-1">Editar vaga</h1>
                <h4 class="text-muted mb-0">Faça ajustes na sua vaga de estágio.</h4>
            </div>
        </div>

        <div class="dashboard-form-card">
            <form method="POST" class="dashboard-form">
                <div class="mb-3">
                    <label for="titulo-editar" class="form-label">Título da vaga</label>
                    <input type="text" class="form-control" id="titulo-editar" value="Estágio em Desenvolvimento Web">
                </div>

                <div class="mb-3">
                    <label for="descricao-editar" class="form-label">Descrição da vaga</label>
                    <textarea class="form-control" id="descricao-editar" rows="5">Descreva as responsabilidades, requisitos e benefícios da vaga.</textarea>
                </div>

                <div class="mb-3">
                    <label for="area-editar" class="form-label">Área de atuação</label>
                    <select class="form-select" id="area-editar">
                        <option>Selecione a área</option>
                        <option value="tecnologia" selected>Tecnologia</option>
                        <option value="marketing">Marketing</option>
                        <option value="recursos-humanos">Recursos Humanos</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-home-primary">Salvar alterações</button>
            </form>
        </div>

    </main>
</section>