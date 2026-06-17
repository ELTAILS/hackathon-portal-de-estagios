package model;

public class Aluno extends EntidadeBase {

    private String nome;
    private String email;
    private String senha;
    private String ra;
    private String curso;
    private Boolean apto;
    private Boolean ativo;

    public Aluno() {
        super();
    }

    public Aluno(Integer id, String nome, String senha,String email, String ra,
                 String curso, Boolean apto, Boolean ativo) {
        super(id);
        this.nome  = nome;
        this.email = email;
        this.senha = senha;
        this.ra    = ra;
        this.curso = curso;
        this.apto  = apto;
        this.ativo = ativo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senhaHash) {
        this.senha = senhaHash;
    }

    public String getRa() {
        return ra;
    }

    public void setRa(String ra) {
        this.ra = ra;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public boolean isApto() {
        return apto != null && apto;
    }

    public void setApto(Boolean apto) {
        this.apto = apto;
    }

    public boolean isAtivo() {
        return ativo != null && ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

    @Override
    public String toString() {
        return "Aluno{" +
                "id=" + getId() +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", ra='" + ra + '\'' +
                ", curso='" + curso + '\'' +
                ", apto=" + apto +
                ", ativo=" + ativo +
                '}';
    }
}