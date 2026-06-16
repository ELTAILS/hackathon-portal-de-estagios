<section id="empresa" class="py-5">
    <div class="container">
        <div class="row">
            <h1>Empresas</h1>
            <p>Confira nossas Empresas parceiras!</p>
            <div class="table-responsive">
                <table class="table table-striped rounded-4 table-vagas">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (isset($empresas) && !empty($empresas)): ?>
                            <?php $i = 1; foreach ($empresas as $empresa): ?>
                                <tr>
                                    <th><?= $i++ ?></th>
                                    <td><?= htmlspecialchars($empresa->getNome()) ?></td>
                                </tr>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <div class="text-center mt-5 mb-5">
                                <h1>Erro ao listar nossas empresas parceiras</h1>
                                <p>Veja essa página novamente mais tarde.</p>
                            </div>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>