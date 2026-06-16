package model;

public abstract class EntidadeBase {

    private Integer id;

    public EntidadeBase() {}

    public EntidadeBase(Integer id) {
        this.id = id;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
}