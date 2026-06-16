package utils;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexaoDao {

    private static Connection connection;

    private ConexaoDao() {
    }

    public static Connection getConnection() {
        try {
            if (connection == null || connection.isClosed()) {
                Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/portal_estagio?useTimezone=true&serverTimezone=UTC",
                        "root",
                        "");
            }
        } catch (Exception e) {
            System.out.println("Erro ao conectar ao banco: " + e.getMessage());
        }
        return connection;
    }
}