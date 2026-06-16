package model;

public class Empresa extends EntidadeBase {

    private String nome;
    private String cnpj;
    private String email;
    private String senhaHash;
    private String status;

    public Empresa() { super(); }

    public Empresa(Integer id, String nome, String cnpj, String email, String status) {
        super(id);
        this.nome   = nome;
        this.cnpj   = cnpj;
        this.email  = email;
        this.status = status;
    }

    public String getNome()   { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCnpj()   { return cnpj; }
    public void setCnpj(String cnpj) { this.cnpj = cnpj; }

    public String getEmail()  { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenhaHash() { return senhaHash; }
    public void setSenhaHash(String senhaHash) { this.senhaHash = senhaHash; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    @Override
    public String toString() { return nome + " (" + status + ")"; }
}