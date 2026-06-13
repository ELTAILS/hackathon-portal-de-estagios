<section id="nova-vaga" class="dashboard-panel">
    <aside id="sidebar" class="dashboard-sidebar">
        <div class="sidebar-header">
            <p class="eyebrow">Painel da empresa</p>
            <h2 class="h4 mb-1">Nome da empresa</h2>
            <p class="text-muted small mb-0">Crie novas oportunidades e acompanhe o processo.</p>
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
                <p class="eyebrow mb-1">Gestão</p>
                <h1 class="h2 mb-1">Nova vaga</h1>
                <h4 class="text-muted mb-0">Crie uma nova vaga de estágio para sua empresa.</h4>
            </div>
        </div>

        <div class="dashboard-form-card">
            <form method="POST" class="dashboard-form">
                <div class="mb-3">
                    <label for="titulo" class="form-label">Título da vaga</label>
                    <input type="text" class="form-control" id="titulo" placeholder="Ex: Estágio em Desenvolvimento Web">
                </div>

                <div class="mb-3">
                    <label for="descricao" class="form-label">Descrição da vaga</label>
                    <textarea class="form-control" id="descricao" rows="5" placeholder="Descreva as responsabilidades, requisitos e benefícios da vaga."></textarea>
                </div>

                <div class="mb-3">
                    <label for="area" class="form-label">Área de atuação</label>
                    <select class="form-select" id="area">
                        <option selected>Selecione a área</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="marketing">Marketing</option>
                        <option value="recursos-humanos">Recursos Humanos</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-home-primary">Criar vaga</button>
            </form>
        </div>
        
    </main>
</section>