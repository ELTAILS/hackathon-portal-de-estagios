package dao;

import model.Vaga;
import utils.ConexaoDao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class VagaDao implements DaoGenerico<Vaga> {

    private final Connection connection;

    public VagaDao() {
        this.connection = ConexaoDao.getConnection();
    }

    @Override
    public void salvar(Vaga vaga) {
        String sql = "INSERT INTO vagas (empresaId, titulo, descricao, area, status) " +
                "VALUES (?, ?, ?, ?, 'aberta')";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, vaga.getEmpresaId());
            stmt.setString(2, vaga.getTitulo());
            stmt.setString(3, vaga.getDescricao());
            stmt.setString(4, vaga.getArea());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar vaga: " + e.getMessage(), e);
        }
    }

    @Override
    public void atualizar(Vaga vaga) {
        String sql = "UPDATE vagas SET titulo=?, descricao=?, area=?, status=? WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, vaga.getTitulo());
            stmt.setString(2, vaga.getDescricao());
            stmt.setString(3, vaga.getArea());
            stmt.setString(4, vaga.getStatus());
            stmt.setInt(5, vaga.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao atualizar vaga: " + e.getMessage(), e);
        }
    }

    @Override
    public void deletar(Integer id) {
        String sql = "UPDATE vagas SET status='encerrada' WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao encerrar vaga: " + e.getMessage(), e);
        }
    }

    @Override
    public Vaga buscarPorId(Integer id) {
        String sql = "SELECT * FROM vagas WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) return mapearVaga(rs);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar vaga: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public List<Vaga> buscarTodos() {
        String sql = "SELECT * FROM vagas ORDER BY criada_em DESC";
        List<Vaga> vagas = new ArrayList<>();
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) vagas.add(mapearVaga(rs));
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar vagas: " + e.getMessage(), e);
        }
        return vagas;
    }

    private Vaga mapearVaga(ResultSet rs) throws SQLException {
        return new Vaga(
                rs.getInt("id"),
                rs.getInt("empresaId"),
                rs.getString("titulo"),
                rs.getString("descricao"),
                rs.getString("area"),
                rs.getString("status"),
                rs.getTimestamp("criada_em").toLocalDateTime()
        );
    }
}