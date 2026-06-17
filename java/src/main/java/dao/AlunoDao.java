package dao;

import model.Aluno;
import utils.ConexaoDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AlunoDao implements DaoGenerico<Aluno> {

    private final Connection connection;

    public AlunoDao() {
        this.connection = ConexaoDao.getConnection();
    }

    @Override
    public void salvar(Aluno aluno) {
        String sql = "INSERT INTO alunos (nome, email, senha, ra, curso, apto, ativo) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, aluno.getNome());
            ps.setString(2, aluno.getEmail());
            ps.setString(3, aluno.getSenha());
            ps.setString(4, aluno.getRa());
            ps.setString(5, aluno.getCurso());
            ps.setBoolean(6, aluno.isApto());
            ps.setBoolean(7, aluno.isAtivo());
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar aluno: " + e.getMessage(), e);
        }
    }

    @Override
    public void atualizar(Aluno aluno) {
        String sql = "UPDATE alunos SET nome=?, email=?, ra=?, curso=?, apto=?, ativo=? WHERE id=?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setString(1, aluno.getNome());
            ps.setString(2, aluno.getEmail());
            ps.setString(3, aluno.getRa());
            ps.setString(4, aluno.getCurso());
            ps.setBoolean(5, aluno.isApto());
            ps.setBoolean(6, aluno.isAtivo());
            ps.setInt(7, aluno.getId());
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao atualizar aluno: " + e.getMessage(), e);
        }
    }

    @Override
    public void deletar(Integer id) {
        String sql = "DELETE FROM alunos WHERE id=?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao deletar aluno: " + e.getMessage(), e);
        }
    }

    @Override
    public Aluno buscarPorId(Integer id) {
        String sql = "SELECT * FROM alunos WHERE id=?";
        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) return mapearAluno(rs);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar aluno: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public List<Aluno> buscarTodos() {
        return listar();
    }

    public List<Aluno> listar() {
        List<Aluno> alunos = new ArrayList<>();
        try (PreparedStatement ps = connection.prepareStatement("SELECT * FROM alunos")) {
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                alunos.add(mapearAluno(rs));
            }
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao listar alunos: " + e.getMessage(), e);
        }
        return alunos;
    }

    private Aluno mapearAluno(ResultSet rs) throws SQLException {
        Aluno a = new Aluno();
        a.setId(rs.getInt("id"));
        a.setNome(rs.getString("nome"));
        a.setEmail(rs.getString("email"));
        a.setSenha(rs.getString("senha"));
        a.setRa(rs.getString("ra"));
        a.setCurso(rs.getString("curso"));
        a.setApto(rs.getBoolean("apto"));
        a.setAtivo(rs.getBoolean("ativo"));
        return a;
    }
}