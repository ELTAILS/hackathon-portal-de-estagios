package dao;

import model.UsuarioAdmin;
import utils.ConexaoDao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UsuarioAdminDao implements DaoGenerico<UsuarioAdmin> {

    private final Connection connection;

    public UsuarioAdminDao() {
        this.connection = ConexaoDao.getConnection();
    }

    @Override
    public void salvar(UsuarioAdmin u) {
        String sql = "INSERT INTO usuarios_admin (nome, email, senha_hash, perfil) VALUES (?, ?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, u.getNome());
            stmt.setString(2, u.getEmail());
            stmt.setString(3, u.getSenhaHash());
            stmt.setString(4, u.getPerfil());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar admin: " + e.getMessage(), e);
        }
    }

    @Override
    public void atualizar(UsuarioAdmin u) {
        String sql = "UPDATE usuarios_admin SET nome=?, email=?, perfil=? WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, u.getNome());
            stmt.setString(2, u.getEmail());
            stmt.setString(3, u.getPerfil());
            stmt.setInt(4, u.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao atualizar admin: " + e.getMessage(), e);
        }
    }

    @Override
    public void deletar(Integer id) {
        String sql = "DELETE FROM usuarios_admin WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao deletar admin: " + e.getMessage(), e);
        }
    }

    @Override
    public UsuarioAdmin buscarPorId(Integer id) {
        String sql = "SELECT * FROM usuarios_admin WHERE id=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) return mapearAdmin(rs);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar admin: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public List<UsuarioAdmin> buscarTodos() {
        String sql = "SELECT * FROM usuarios_admin ORDER BY nome";
        List<UsuarioAdmin> lista = new ArrayList<>();
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) lista.add(mapearAdmin(rs));
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar admins: " + e.getMessage(), e);
        }
        return lista;
    }

    public UsuarioAdmin buscarPorEmail(String email) {
        String sql = "SELECT * FROM usuarios_admin WHERE email=?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) return mapearAdmin(rs);
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar por email: " + e.getMessage(), e);
        }
        return null;
    }

    private UsuarioAdmin mapearAdmin(ResultSet rs) throws SQLException {
        UsuarioAdmin u = new UsuarioAdmin(
                rs.getInt("id"),
                rs.getString("nome"),
                rs.getString("email"),
                rs.getString("perfil")
        );
        u.setSenhaHash(rs.getString("senha_hash"));
        return u;
    }
}
