package dao;

import model.Candidatura;
import utils.ConexaoDao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CandidaturaDao implements DaoGenerico<Candidatura> {

    private final Connection connection;

    public CandidaturaDao() {
        this.connection = ConexaoDao.getConnection();
    }

    @Override
    public void salvar(Candidatura c) {
        String sql = "INSERT INTO candidaturas (aluno_id, vaga_id, status) VALUES (?, ?, 'em_analise')";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, c.getAlunoId());
            stmt.setInt(2, c.getVagaId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar candidatura: " + e.getMessage(), e);
        }
    }

    @Override
    public void atualizar(Candidatura c) {
        String sql = "UPDATE candidaturas SET status=? WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, c.getStatus());
            stmt.setInt(2, c.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao atualizar candidatura: " + e.getMessage(), e);
        }
    }

    @Override
    public void deletar(Integer id) {
        String sql = "DELETE FROM candidaturas WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao deletar candidatura: " + e.getMessage(), e);
        }
    }

    @Override
    public Candidatura buscarPorId(Integer id) {
        String sql = "SELECT * FROM candidaturas WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) return mapearCandidatura(rs);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar candidatura: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public List<Candidatura> buscarTodos() {
        String sql = "SELECT * FROM candidaturas ORDER BY data_candidatura DESC";
        List<Candidatura> lista = new ArrayList<>();
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) lista.add(mapearCandidatura(rs));
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar candidaturas: " + e.getMessage(), e);
        }
        return lista;
    }

    private Candidatura mapearCandidatura(ResultSet rs) throws SQLException {
        return new Candidatura(
                rs.getInt("id"),
                rs.getInt("aluno_id"),
                rs.getInt("vaga_id"),
                rs.getString("status"),
                rs.getTimestamp("data_candidatura").toLocalDateTime()
        );
    }
}