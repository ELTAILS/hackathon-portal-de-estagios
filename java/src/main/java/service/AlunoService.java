package service;

import dao.AlunoDao;
import model.Aluno;
import org.mindrot.jbcrypt.BCrypt;
import utils.Arquivo;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class AlunoService {

    private final AlunoDao dao;

    public AlunoService() {
        this.dao = new AlunoDao();
    }

    public List<Aluno> listar() {
        try {
            return dao.listar();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }

    public List<Aluno> buscarTodos() {
        return listar();
    }

    public Aluno buscarPorId(Integer id) {
        return dao.buscarPorId(id);
    }

    public void salvar(Aluno aluno) {
        if (aluno.getNome() == null || aluno.getNome().isBlank())
            throw new IllegalArgumentException("Nome é obrigatório.");
        if (aluno.getEmail() == null || aluno.getEmail().isBlank())
            throw new IllegalArgumentException("E-mail é obrigatório.");
        if (aluno.getSenha() != null && !aluno.getSenha().isBlank()) {
            aluno.setSenha(BCrypt.hashpw(aluno.getSenha(), BCrypt.gensalt()));
        }
        dao.salvar(aluno);
    }

    public void atualizar(Aluno aluno) {
        dao.atualizar(aluno);
    }

    public void marcarComoApto(Integer id, boolean apto) {
        Aluno aluno = dao.buscarPorId(id);
        if (aluno == null)
            throw new RuntimeException("Aluno não encontrado.");
        aluno.setApto(apto);
        dao.atualizar(aluno);
    }

    public List<String> importarDeTxt(String caminho) {
        List<String> relatorio = new ArrayList<>();
        List<String> linhas = Arquivo.readerFile(caminho);

        for (String linha : linhas) {
            if (linha == null || linha.isBlank()) continue;
            String[] campos = linha.split(";");
            if (campos.length < 4) {
                relatorio.add("Linha inválida (ignorada): " + linha);
                continue;
            }
            try {
                Aluno aluno = new Aluno();
                aluno.setNome(campos[0].trim());
                aluno.setEmail(campos[1].trim());
                aluno.setRa(campos[2].trim());
                aluno.setCurso(campos[3].trim());
                aluno.setAtivo(true);
                if (aluno.getSenha() != null && !aluno.getSenha().isBlank()) {
                    aluno.setSenha(BCrypt.hashpw(aluno.getSenha(), BCrypt.gensalt()));
                }
                dao.salvar(aluno);
                relatorio.add("Importado: " + aluno.getNome());
            } catch (Exception e) {
                relatorio.add("Erro ao importar linha \"" + linha + "\": " + e.getMessage());
            }
        }
        return relatorio;
    }

    public void incluir(Aluno aluno) {
        try {
            var arquivo = new File(System.getProperty("user.dir"), "produtos.txt");
            Arquivo.writerFile(aluno.toString(), arquivo.toString());
            Arquivo.readerFile(arquivo.toString()).forEach(System.out::println);

            if (aluno.getId() == null) {
                if (aluno.getSenha() != null && !aluno.getSenha().isBlank()) {
                    aluno.setSenha(BCrypt.hashpw(aluno.getSenha(), BCrypt.gensalt()));
                }
                dao.salvar(aluno);
            } else {
                dao.atualizar(aluno);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void deletar(Integer id) {
        try {
            dao.deletar(id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}