package service;

import dao.EmpresaDao;
import model.Empresa;

import java.util.ArrayList;
import java.util.List;

public class EmpresaService {

    public List<Empresa> listar(){
        try{
            var dao = new EmpresaDao();
            return dao.listar();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return  new ArrayList<>();
        }
    }

    public void deletar(Long id) {
        try{
            var dao = new EmpresaDao();
            dao.deletar(id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public void incluir (Empresa empresa ) {




        try {
            var dao = new EmpresaDao();
            if (empresa.getId() == null) {
                dao.inserir(empresa);
            } else {
                dao.atualizar(empresa);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
