package service;

import dao.VagaDao;
import model.Vaga;

import java.util.List;

public class VagaService {

    private final VagaDao dao;

    public VagaService() {
        this.dao = new VagaDao();
    }

    public void salvar(Vaga vaga) {
        if (vaga.getTitulo() == null || vaga.getTitulo().isBlank())
            throw new IllegalArgumentException("Título é obrigatório.");
        if (vaga.getEmpresaId() == null)
            throw new IllegalArgumentException("Empresa é obrigatória.");
        dao.salvar(vaga);
    }

    public void encerrar(Integer id) {
        Vaga vaga = dao.buscarPorId(id);
        if (vaga == null)
            throw new RuntimeException("Vaga não encontrada.");
        if (vaga.getStatus().equals("encerrada"))
            throw new RuntimeException("Vaga já está encerrada.");
        dao.deletar(id);
    }

    public Vaga buscarPorId(Integer id) { return dao.buscarPorId(id); }
    public List<Vaga> buscarTodos()     { return dao.buscarTodos(); }
}