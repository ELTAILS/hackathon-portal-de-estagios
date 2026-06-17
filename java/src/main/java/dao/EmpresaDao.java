package dao;

import model.Empresa;
import utils.ConexaoDao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class EmpresaDao implements DaoGenerico<Empresa> {

    private final Connection connection;

    public EmpresaDao() {
        this.connection = ConexaoDao.getConnection();
    }

    @Override
    public void salvar(Empresa empresa) {
        String sql = "INSERT INTO empresas (nome, cnpj, email, senha, status) " +
                "VALUES (?, ?, ?, ?, 'pendente')";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, empresa.getNome());
            stmt.setString(2, empresa.getCnpj());
            stmt.setString(3, empresa.getEmail());
            stmt.setString(4, empresa.getSenhaHash());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar empresa: " + e.getMessage(), e);
        }
    }

    @Override
    public void atualizar(Empresa empresa) {
        String sql = "UPDATE empresas SET nome=?, cnpj=?, email=?, status=? WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, empresa.getNome());
            stmt.setString(2, empresa.getCnpj());
            stmt.setString(3, empresa.getEmail());
            stmt.setString(4, empresa.getStatus());
            stmt.setInt(5, empresa.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao atualizar empresa: " + e.getMessage(), e);
        }
    }

    @Override
    public void deletar(Integer id) {
        String sql = "UPDATE empresas SET status='bloqueada' WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao bloquear empresa: " + e.getMessage(), e);
        }
    }

    @Override
    public Empresa buscarPorId(Integer id) {
        String sql = "SELECT * FROM empresas WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) return mapearEmpresa(rs);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar empresa: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public List<Empresa> buscarTodos() {
        String sql = "SELECT * FROM empresas ORDER BY status, nome";
        List<Empresa> lista = new ArrayList<>();
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) lista.add(mapearEmpresa(rs));
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar empresas: " + e.getMessage(), e);
        }
        return lista;
    }

    public void atualizarStatus(Integer id, String status) {
        String sql = "UPDATE empresas SET status=? WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, status);
            stmt.setInt(2, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao atualizar status: " + e.getMessage(), e);
        }
    }

    private Empresa mapearEmpresa(ResultSet rs) throws SQLException {
        return new Empresa(
                rs.getInt("id"),
                rs.getString("nome"),
                rs.getString("cnpj"),
                rs.getString("email"),
                rs.getString("status")
        );
    }
}