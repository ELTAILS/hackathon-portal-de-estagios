package service;

import dao.EmpresaDao;
import model.Empresa;
import org.mindrot.jbcrypt.BCrypt;

import java.util.List;

public class EmpresaService {

    private final EmpresaDao dao;

    public EmpresaService() {
        this.dao = new EmpresaDao();
    }

    public void salvar(Empresa empresa) {
        if (empresa.getNome() == null || empresa.getNome().isBlank())
            throw new IllegalArgumentException("Nome é obrigatório.");
        if (empresa.getCnpj() == null || empresa.getCnpj().isBlank())
            throw new IllegalArgumentException("CNPJ é obrigatório.");
        if (empresa.getEmail() == null || empresa.getEmail().isBlank())
            throw new IllegalArgumentException("E-mail é obrigatório.");
        if (empresa.getSenhaHash() == null || empresa.getSenhaHash().isBlank())
            throw new IllegalArgumentException("Senha é obrigatória.");

        empresa.setSenhaHash(BCrypt.hashpw(empresa.getSenhaHash(), BCrypt.gensalt()));
        dao.salvar(empresa);
    }

    public void aprovar(Integer id) {
        Empresa empresa = dao.buscarPorId(id);
        if (empresa == null)
            throw new RuntimeException("Empresa não encontrada.");
        if (!empresa.getStatus().equals("pendente"))
            throw new RuntimeException("Só é possível aprovar empresas com status 'pendente'.");
        dao.atualizarStatus(id, "aprovada");
    }

    public void bloquear(Integer id) {
        Empresa empresa = dao.buscarPorId(id);
        if (empresa == null)
            throw new RuntimeException("Empresa não encontrada.");
        if (empresa.getStatus().equals("bloqueada"))
            throw new RuntimeException("Empresa já está bloqueada.");
        dao.atualizarStatus(id, "bloqueada");
    }

    public Empresa buscarPorId(Integer id)  { return dao.buscarPorId(id); }
    public List<Empresa> buscarTodos()      { return dao.buscarTodos(); }
}