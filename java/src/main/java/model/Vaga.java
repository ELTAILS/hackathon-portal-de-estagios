package model;

import java.time.LocalDateTime;

public class Vaga extends EntidadeBase {

    private Integer empresaId;
    private String titulo;
    private String descricao;
    private String area;
    private String status;
    private LocalDateTime criadaEm;

    public Vaga() { super(); }

    public Vaga(Integer id, Integer empresaId, String titulo,
                String descricao, String area, String status, LocalDateTime criadaEm) {
        super(id);
        this.empresaId = empresaId;
        this.titulo    = titulo;
        this.descricao = descricao;
        this.area      = area;
        this.status    = status;
        this.criadaEm  = criadaEm;
    }

    public Integer getEmpresaId() { return empresaId; }
    public void setEmpresaId(Integer empresaId) { this.empresaId = empresaId; }

    public String getTitulo()   { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getArea()     { return area; }
    public void setArea(String area) { this.area = area; }

    public String getStatus()   { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCriadaEm() { return criadaEm; }
    public void setCriadaEm(LocalDateTime criadaEm) { this.criadaEm = criadaEm; }

    @Override
    public String toString() { return titulo + " [" + status + "]"; }
}