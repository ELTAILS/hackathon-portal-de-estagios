package model;

public class UsuarioAdmin extends EntidadeBase {

    private String nome;
    private String email;
    private String senhaHash;
    private String perfil;

    public UsuarioAdmin() { super(); }

    public UsuarioAdmin(Integer id, String nome, String email, String perfil) {
        super(id);
        this.nome   = nome;
        this.email  = email;
        this.perfil = perfil;
    }

    public String getNome()      { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail()     { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenhaHash() { return senhaHash; }
    public void setSenhaHash(String senhaHash) { this.senhaHash = senhaHash; }

    public String getPerfil()    { return perfil; }
    public void setPerfil(String perfil) { this.perfil = perfil; }

    @Override
    public String toString() { return nome + " [" + perfil + "]"; }
}