package service;

import dao.AlunoDao;
import model.Aluno;
import utils.Arquivo;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class AlunoService {
    //listar Alunos
    public List<Aluno> listar()
    {
        try {
            var dao = new AlunoDao();
            return dao.listar();
        } catch (Exception e){
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }

    public void incluir(Aluno aluno) {
        try {
            var arquivo = new File(System.getProperty("user.dir"), "\\produtos.txt");
            Arquivo.writerFile(aluno.toString(), arquivo.toString());
            Arquivo.readerFile(arquivo.toString()).forEach(System.out::println);
            var dao = new AlunoDao();
            if (aluno.getId() == 0) {
                dao.inserir(aluno);
            } else {
                dao.atualizar(aluno);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void deletar(long id) {
        try {
            var dao = new AlunoDao();
            dao.deletar(id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }


}
