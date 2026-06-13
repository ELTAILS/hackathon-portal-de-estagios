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
            <form method="POST" class="dashboard-form" action="<?= BASE_URL ?>novaVaga">
                <div class="mb-3">
                    <label for="titulo" class="form-label">Título da vaga</label>
                    <input type="text" class="form-control" id="titulo" name="titulo" maxlength="150" placeholder="Ex: Estágio em Desenvolvimento Web" required>
                </div>

                <div class="mb-3">
                    <label for="descricao" class="form-label">Descrição da vaga</label>
                    <textarea class="form-control" id="descricao" name="descricao" rows="5" placeholder="Descreva as responsabilidades, requisitos e benefícios da vaga." required></textarea>
                </div>

                <div class="mb-3">
                    <label for="area" class="form-label">Área de atuação</label>
                    <select class="form-select" id="area" name="area" required>
                        <option value="" selected disabled>Selecione a área</option>
                        <option value="Administração">Administração</option>
                        <option value="Ciências Contábeis">Ciências Contábeis</option>
                        <option value="Direito">Direito</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Pedagogia">Pedagogia</option>
                        <option value="Processos Gerenciais">Processos Gerenciais</option>
                        <option value="Psicologia">Psicologia</option>
                        <option value="Sistemas para Internet">Sistemas para Internet</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="status" class="form-label">Situação da vaga</label>
                    <select class="form-select" id="status" name="status" required>
                        <option value="aberta" selected>Aberta</option>
                        <option value="encerrada">Encerrada</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-home-primary">Criar vaga</button>
            </form>
        </div>

    </main>
</section>