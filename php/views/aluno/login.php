<?php 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $ra = $_POST['ra'] ?? '';
        $senha = $_POST['password'] ?? '';

        try {
            $resposta = ApiClient::post('/auth/aluno/login', [
                'ra' => $ra,
                'senha' => $senha
            ]);

            if (empty($resposta)) {
                throw new Exception('Credenciais inválidas!');
            }

            $aluno = new Aluno(
                $resposta['id'],
                $resposta['nome'],
                $resposta['email'],
                '',
                $resposta['ra'],
                $resposta['curso'],
                $resposta['ativo']
            );

            $_SESSION['usuario'] = $aluno;

            header('Location: ' . BASE_URL . '/painelAluno');
            exit;
        } catch (Exception $e) {
            echo "<h1 class=\"text-center text-danger mt-4\">" . $e->getMessage() . "</h1>";
        }
    }
?>
<section id="login" class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="card login-card p-4">
        <form method="post">

            <div class="text-center">
                <img src="<?= BASE_URL ?>assets/imgs/logo.png" style="width: 200px;" alt="Logo login">
            </div>

            <!--RA-->
            <label for="ra">RA</label>

                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">
                        <i class="fa-solid fa-id-card"></i>
                    </span>
                    <input type="text" class="form-control" id="ra" name="ra" placeholder="Seu RA" aria-label="RA" required>
                </div>

            <!--Senha-->
            <label for="password">Senha</label>

            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                    <i class="fa-solid fa-key"></i>
                </span>

                <input type="password" class="form-control" id="password" name="password" placeholder="Sua senha mas secreta" aria-label="Senha" aria-describedby="addon-wrapping" required>
            </div>

            <div class="d-grid">
                <a href="<?= BASE_URL ?>empresaLogin" class="text-black mt-3 mb-2">Sou empresa</a>
                <button class="btn btn-login" type="submit">
                    Login
                </button>
            </div>
        </form>
    </div>
</section>