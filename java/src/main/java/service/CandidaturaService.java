package service;

import dao.AlunoDao;
import dao.CandidaturaDao;
import model.Aluno;
import model.Candidatura;

import java.util.List;

public class CandidaturaService {

    private final CandidaturaDao dao;
    private final AlunoDao alunoDao;

    public CandidaturaService() {
        this.dao      = new CandidaturaDao();
        this.alunoDao = new AlunoDao();
    }

    public void salvar(Candidatura candidatura) {
        Aluno aluno = alunoDao.buscarPorId(candidatura.getAlunoId());
        if (aluno == null)
            throw new RuntimeException("Aluno não encontrado.");
        if (!aluno.isApto())
            throw new RuntimeException("Aluno não está apto a se candidatar.");
        dao.salvar(candidatura);
    }

    public Candidatura buscarPorId(Integer id)      { return dao.buscarPorId(id); }
    public List<Candidatura> buscarTodos()          { return dao.buscarTodos(); }
}