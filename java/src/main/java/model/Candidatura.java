package model;

import java.time.LocalDateTime;

public class Candidatura extends EntidadeBase {

    private Integer alunoId;
    private Integer vagaId;
    private String status;
    private LocalDateTime dataCandidatura;

    public Candidatura() { super(); }

    public Candidatura(Integer id, Integer alunoId, Integer vagaId,
                       String status, LocalDateTime dataCandidatura) {
        super(id);
        this.alunoId          = alunoId;
        this.vagaId           = vagaId;
        this.status           = status;
        this.dataCandidatura  = dataCandidatura;
    }

    public Integer getAlunoId() { return alunoId; }
    public void setAlunoId(Integer alunoId) { this.alunoId = alunoId; }

    public Integer getVagaId()  { return vagaId; }
    public void setVagaId(Integer vagaId) { this.vagaId = vagaId; }

    public String getStatus()   { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getDataCandidatura() { return dataCandidatura; }
    public void setDataCandidatura(LocalDateTime d) { this.dataCandidatura = d; }

    @Override
    public String toString() { return "Candidatura #" + getId() + " — " + status; }
}