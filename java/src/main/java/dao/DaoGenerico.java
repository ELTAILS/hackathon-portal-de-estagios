package dao;

import java.util.List;

public interface DaoGenerico<T> {
    void salvar(T objeto);
    void atualizar(T objeto);
    void deletar(Integer id);
    T buscarPorId(Integer id);
    List<T> buscarTodos();
}