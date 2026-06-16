package utils;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexaoDao {

    private Connection connection;

    public ConexaoDao(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            this.connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/portal_estagio?useTimezone=true&serverTimezone=UTC",
                    "root",
                    "");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public Connection getConnection() {
        return connection;
    }
}