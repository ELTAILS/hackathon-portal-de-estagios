<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $cnpj = $_POST['cnpj'] ?? '';
        $password = $_POST['password'] ?? '';

        try{
            $resposta = ApiClient::post('/auth/empresa/login', [
                'cnpj' => $cnpj,
                'senha' => $password
            ]);

            if (empty($resposta)) {
                throw new Exception('Credenciais inválidas!');
            }

            $empresa = new Empresa(
                $resposta['id'],
                $resposta['nome'],
                $resposta['cnpj'],
                $resposta['email'],
                EmpresaStatus::from($resposta['status'])
            );

            $_SESSION['usuario'] = $empresa;

            header('Location: ' . BASE_URL . 'painelEmpresa');
            exit;

        } catch (Exception $e){
            echo "<h1 class=\"text-center text-danger mt-4\">Dados Invalidos</h1>";
        }

    }
?>

<section id="login" class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="card login-card p-4">
        <form method="post">

            <div class="text-center">
                <img src="<?= BASE_URL ?>assets/imgs/logo.png" style="width: 200px;" alt="Logo login empresa">
            </div>

            <label for="cnpj">CNPJ</label>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-cnpj">
                    <i class="fa-solid fa-building"></i>
                </span>
                <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder="00.000.000/0000-00" aria-label="CNPJ" aria-describedby="addon-cnpj" minlength="14" maxlength="14" required>
            </div>

            <label for="password">Senha</label>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-password">
                    <i class="fa-solid fa-key"></i>
                </span>
                <input type="password" class="form-control" id="password" name="password" placeholder="Sua senha secreta" aria-label="Senha" aria-describedby="addon-password" required>
            </div>

            <div class="d-grid">
                <a href="<?= BASE_URL ?>login" class="text-black mt-3 mb-2">Sou aluno</a>
                <button class="btn btn-login" type="submit">
                    Entrar como empresa
                </button>
            </div>
        </form>
    </div>
</section>
