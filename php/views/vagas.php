<section id="vagas" class="mt-5 mb-5">
    <div class="container">
        <div class="row">
            <h1>Vagas</h1>
            <p>Confira nossas oportunidades abertas e candidate-se!</p>
            <div class="table-responsive"> <!--Deixa a tabela responsiva-->
                <table class="table table-striped rounded-4 table-vagas">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descricao</th>
                            <th scope="col">Area</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (isset($vagas) && !empty($vagas)): ?>
                            <?php foreach ($vagas as $vaga): ?>
                                <tr>
                                    <th><?= $vaga->getEmpresaId() ?></th>
                                    <td><?= $vaga->getTitulo() ?></td>
                                    <td><?= $vaga->getDescricao() ?></td>
                                    <td><?= $vaga->getArea() ?></td>
                                    <td><?= $vaga->getStatus()->value ?></td>
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
    </div>
</section>