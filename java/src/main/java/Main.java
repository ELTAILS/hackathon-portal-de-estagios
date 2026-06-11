import dao.Dao;

public class Main {
    public static void main(String[] args) {
        Dao conexao = new Dao();
        try{
            conexao.getConnection();
            System.out.printf("Banco conectado");
        } catch (Exception e) {
            System.out.printf("Banco não conectado" + e.getMessage());
        }
    }
}
