<?php 
    if (!isset($_SESSION['usuario']) || !($_SESSION['usuario'] instanceof Empresa)) {
        header('Location: ' . BASE_URL . 'empresaLogin');
        exit;
    }
    
    if (!empty($mensagem)) {
        echo '<div class="alert alert-danger" role="alert">' . $mensagem . '</div>';
    }

    $empresa = $_SESSION['usuario'];
?>
<section id="editar-vaga" class="dashboard-panel">
    <aside id="sidebar" class="dashboard-sidebar">
        <div class="sidebar-header">
            <p class="eyebrow">Painel da empresa</p>
            <h2 class="h4 mb-1"><?= htmlspecialchars($empresa->getNome()) ?></h2>
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
            <form method="POST" class="dashboard-form" action="<?= BASE_URL ?>editarVaga?id=<?= $id ?>">
                <div class="mb-3">
                    <label for="titulo" class="form-label">Título da vaga</label>
                    <input type="text" class="form-control" id="titulo" name="titulo" maxlength="150" placeholder="Ex: Estágio em Desenvolvimento Web" value="<?= htmlspecialchars($vaga['titulo'] ?? '') ?>" required>
                </div>

                <div class="mb-3">
                    <label for="descricao" class="form-label">Descrição da vaga</label>
                    <textarea class="form-control" id="descricao" name="descricao" rows="5" placeholder="Descreva as responsabilidades, requisitos e benefícios da vaga." required><?= htmlspecialchars($vaga['descricao'] ?? '') ?></textarea>
                </div>

                <div class="mb-3">
                    <label for="area" class="form-label">Área de atuação</label>
                    <?php $areaAtual = $vaga['area'] ?? ''; ?>
                    <select class="form-select" id="area" name="area" required>
                        <option value="" disabled <?= $areaAtual === '' ? 'selected' : '' ?>>Selecione a área</option>
                        <option value="Administração" <?= $areaAtual === 'Administração' ? 'selected' : '' ?>>Administração</option>
                        <option value="Ciências Contábeis" <?= $areaAtual === 'Ciências Contábeis' ? 'selected' : '' ?>>Ciências Contábeis</option>
                        <option value="Direito" <?= $areaAtual === 'Direito' ? 'selected' : '' ?>>Direito</option>
                        <option value="Marketing" <?= $areaAtual === 'Marketing' ? 'selected' : '' ?>>Marketing</option>
                        <option value="Pedagogia" <?= $areaAtual === 'Pedagogia' ? 'selected' : '' ?>>Pedagogia</option>
                        <option value="Processos Gerenciais" <?= $areaAtual === 'Processos Gerenciais' ? 'selected' : '' ?>>Processos Gerenciais</option>
                        <option value="Psicologia" <?= $areaAtual === 'Psicologia' ? 'selected' : '' ?>>Psicologia</option>
                        <option value="Sistemas para Internet" <?= $areaAtual === 'Sistemas para Internet' ? 'selected' : '' ?>>Sistemas para Internet</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="status" class="form-label">Situação da vaga</label>
                    <?php $statusAtual = $vaga['status'] ?? 'aberta'; ?>
                    <select class="form-select" id="status" name="status" required>
                        <option value="aberta" <?= $statusAtual === 'aberta' ? 'selected' : '' ?>>Aberta</option>
                        <option value="encerrada" <?= $statusAtual === 'encerrada' ? 'selected' : '' ?>>Encerrada</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-home-primary">Salvar alterações</button>
            </form>
        </div>

    </main>
</section>