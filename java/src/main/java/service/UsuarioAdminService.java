package service;

import dao.UsuarioAdminDao;
import model.UsuarioAdmin;
import org.mindrot.jbcrypt.BCrypt;

import java.util.List;

public class UsuarioAdminService {

    private final UsuarioAdminDao dao;

    public UsuarioAdminService() {
        this.dao = new UsuarioAdminDao();
    }

    public UsuarioAdmin autenticar(String email, String senha) {
        if (email == null || email.isBlank())
            throw new IllegalArgumentException("E-mail não pode ser vazio.");
        if (senha == null || senha.isBlank())
            throw new IllegalArgumentException("Senha não pode ser vazia.");

        UsuarioAdmin admin = dao.buscarPorEmail(email);
        if (admin == null)
            throw new RuntimeException("Usuário não encontrado.");
        if (!BCrypt.checkpw(senha, admin.getSenhaHash()))
            throw new RuntimeException("Senha incorreta.");

        return admin;
    }

    public void salvar(UsuarioAdmin admin) {
        if (admin.getNome() == null || admin.getNome().isBlank())
            throw new IllegalArgumentException("Nome é obrigatório.");
        if (admin.getEmail() == null || admin.getEmail().isBlank())
            throw new IllegalArgumentException("E-mail é obrigatório.");
        if (admin.getSenhaHash() == null || admin.getSenhaHash().length() < 6)
            throw new IllegalArgumentException("Senha deve ter no mínimo 6 caracteres.");

        admin.setSenhaHash(BCrypt.hashpw(admin.getSenhaHash(), BCrypt.gensalt()));
        dao.salvar(admin);
    }

    public void atualizar(UsuarioAdmin admin) { dao.atualizar(admin); }
    public void deletar(Integer id)           { dao.deletar(id); }
    public UsuarioAdmin buscarPorId(Integer id) { return dao.buscarPorId(id); }
    public List<UsuarioAdmin> buscarTodos()   { return dao.buscarTodos(); }
}