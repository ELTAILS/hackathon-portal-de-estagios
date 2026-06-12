package dao;

import model.Aluno;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AlunoDao extends Dao
{
    public List<Aluno> listar() throws SQLException
    {
        List<Aluno> alunos = new ArrayList<>();
        var alunosListar = getConnection()
                .prepareStatement("select * from alunos")
                .executeQuery();

        while (alunosListar.next()){
            var a = new Aluno();
            a.setId(alunosListar.getLong("id"));
            a.setNome(alunosListar.getString("nome"));
            a.setEmail(alunosListar.getString("email"));
            a.setSenha(alunosListar.getString("senha"));
            a.setRa(alunosListar.getString("ra"));
            a.setCurso(alunosListar.getString("curso"));
            a.setAtivo(alunosListar.getBoolean("ativo"));
        }

        return alunos;

    }

    public void inserir(Aluno aluno) throws SQLException {
        var sql = "insert into alunos(nome, email, senha, ra, curso, ativo) values(?,?,?,?,?,?)";
        var ps = getConnection().prepareStatement(sql);
        ps.setString(1, aluno.getNome());
        ps.setString(2, aluno.getEmail());
        ps.setString(3, aluno.getSenha());
        ps.setString(4, aluno.getRa());
        ps.setString(5, aluno.getCurso());
        ps.setBoolean(6, aluno.getAtivo());
        ps.execute();
    }

    public void atualizar(Aluno aluno) throws SQLException {
        var sql = "update alunos set nome=?, email=?, senha=?, ra=?, curso=?, ativo=? where id=?";
        var ps = getConnection().prepareStatement(sql);
        ps.setString(1, aluno.getNome());
        ps.setString(2, aluno.getEmail());
        ps.setString(3, aluno.getSenha());
        ps.setString(4, aluno.getRa());
        ps.setString(5, aluno.getCurso());
        ps.setBoolean(6, aluno.getAtivo());
        ps.setLong(7, aluno.getId());
        ps.execute();
    }

    public void deletar(Long id) throws SQLException {
        var sql = "delete from alunos where id=?";
        var ps = getConnection().prepareStatement(sql);
        ps.setLong(1, id);
        ps.execute();
    }

}
