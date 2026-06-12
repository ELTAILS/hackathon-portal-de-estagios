package dao;

import model.Empresa;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpresaDao extends  Dao{
    public List<Empresa> listar() throws SQLException{
        List<Empresa> empresas = new ArrayList<>();

        var empresaListar = getConnection()
                .prepareStatement("Select * from empresa")
                .executeQuery();

        while (empresaListar.next()) {
            var p = new Empresa();
            p.setId(empresaListar.getLong("id"));
            p.setNome(empresaListar.getString("nome"));
            p.setCnpj(empresaListar.getLong("cnpj"));
            p.setEmail(empresaListar.getString("email"));
            p.setSenha_hash(empresaListar.getString("senha_hash"));
            p.setStatus(empresaListar.getString("status"));
            empresas.add(p);
        }

        return empresas;
    }

    public void inserir(Empresa empresa) throws SQLException {
        var sqlInsert = "insert into empresa(nome, cnpj, email, senha_hash, status) values(?, ?, ?, ?, ?)";
        var ps = getConnection().prepareStatement(sqlInsert);
        ps.setString(1, empresa.getNome());
        ps.setLong  (2, empresa.getCnpj());
        ps.setString(3, empresa.getEmail());
        ps.setString(4, empresa.getSenha_hash());
        ps.setString(5, empresa.getStatus());
        ps.execute();
    }

    public void atualizar(Empresa empresa) throws SQLException {
        var sqlUpdate = "update empresa set nome = ?, cnpj = ?, email = ?, senha_hash = ?, status = ? where id = ?";
        var ps = getConnection().prepareStatement(sqlUpdate);
        ps.setString(1, empresa.getNome());
        ps.setLong  (2, empresa.getCnpj());
        ps.setString(3, empresa.getEmail());
        ps.setString(4, empresa.getSenha_hash());
        ps.setString(5, empresa.getStatus());
        ps.setLong  (6, empresa.getId());
        ps.execute();
    }

    public void deletar(long id) throws SQLException {
        var sqlDelete = "delete from empresa where id = ?";
        var ps = getConnection().prepareStatement(sqlDelete);
        ps.setLong(1, id);
        ps.execute();
    }
}
