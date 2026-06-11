<section id="login" class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="card login-card p-4">
        <form method="post">

            <div class="text-center">
                <img src="<?= BASE_URL ?>assets/imgs/logo.png" style="width: 200px;" alt="Logo login">
            </div>

            <!--Email-->
            <label for="email">Email</label>

            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                    <i class="fa-solid fa-envelope"></i>
                </span>

                <input type="email" class="form-control" placeholder="Seu melhor email" aria-label="Username" aria-describedby="addon-wrapping">
            </div>

            <!--Senha-->
            <label for="password">Senha</label>

            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                    <i class="fa-solid fa-key"></i>
                </span>

                <input type="password" class="form-control" placeholder="Sua senha mas secreta" aria-label="Username" aria-describedby="addon-wrapping">
            </div>

            <div class="d-grid">
                <a href="#" class="text-black mt-3 mb-4">
                    Esqueceu sua senha
                </a>
                <button class="btn btn-login" type="submit">
                    Login
                </button>
            </div>
        </form>
    </div>
</section>