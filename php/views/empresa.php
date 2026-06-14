<section id="empresa" class="py-5">
    <div class="container">
        <div class="row g-4">
            <?php for ($i = 0; $i < 6; $i++): ?>
                <div class="col-12 col-md-6 col-lg-4">
                    <article class="card empresa-card h-100 shadow-sm">
                        <div class="card-body">
                            <span class="badge bg-primary-subtle text-primary-emphasis">Empresa <?= $i + 1 ?></span>
                            <h3 class="h5 mt-3 mb-2">Nome da Empresa</h3>
                            <p class="text-muted mb-3">Descrição da empresa, com foco em inovação, desenvolvimento e oportunidades de estágio para estudantes.</p>
                            <ul class="list-unstyled mb-0">
                                <li><strong>Cidade:</strong> Recife</li>
                                <li><strong>Área de atuação:</strong> Tecnologia e Desenvolvimento</li>
                            </ul>
                        </div>
                    </article>
                </div>
            <?php endfor; ?>
        </div>
    </div>
</section>