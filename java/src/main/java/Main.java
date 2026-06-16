import utils.ConexaoDao;

public class Main {
    public static void main(String[] args) {
        ConexaoDao conexao = new ConexaoDao();
        try{
            conexao.getConnection();
            System.out.printf("Banco conectado");
        } catch (Exception e) {
            System.out.printf("Banco não conectado" + e.getMessage());
        }
    }
}