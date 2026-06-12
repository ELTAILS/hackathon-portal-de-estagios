import dao.Dao;

public class Main {
    public static void main(String[] args) {
        Dao conexao = new Dao();
        try{
            conexao.getConnection();
            System.out.println("Banco conectado");
            System.out.println("teste");
        } catch (Exception e) {
            System.out.printf("Banco não conectado" + e.getMessage());
        }
    }
}
