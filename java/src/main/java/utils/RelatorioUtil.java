package utils;

import model.Aluno;
import model.Candidatura;
import model.Empresa;
import model.Vaga;

import java.util.List;

public class RelatorioUtil {

    public static void gerarRelatorioEmpresas(List<Empresa> empresas, String caminho) {
        StringBuilder sb = new StringBuilder("=== Relatório de Empresas ===\n");
        for (Empresa e : empresas) {
            sb.append(String.format("ID: %s | Nome: %s | CNPJ: %s | E-mail: %s | Status: %s%n",
                    e.getId(), e.getNome(), e.getCnpj(), e.getEmail(), e.getStatus()));
        }
        Arquivo.writerFile(sb.toString(), caminho, false);
    }

    public static void gerarRelatorioAlunos(List<Aluno> alunos, String caminho) {
        StringBuilder sb = new StringBuilder("=== Relatório de Alunos ===\n");
        for (Aluno a : alunos) {
            sb.append(String.format("ID: %s | Nome: %s | RA: %s | Curso: %s | Apto: %s | Ativo: %s%n",
                    a.getId(), a.getNome(), a.getRa(), a.getCurso(), a.isApto(), a.isAtivo()));
        }
        Arquivo.writerFile(sb.toString(), caminho, false);
    }

    public static void gerarRelatorioVagas(List<Vaga> vagas, String caminho) {
        StringBuilder sb = new StringBuilder("=== Relatório de Vagas ===\n");
        for (Vaga v : vagas) {
            sb.append(String.format("ID: %s | Empresa ID: %s | Título: %s | Área: %s | Status: %s%n",
                    v.getId(), v.getEmpresaId(), v.getTitulo(), v.getArea(), v.getStatus()));
        }
        Arquivo.writerFile(sb.toString(), caminho, false);
    }

    public static void gerarRelatorioCandidaturas(List<Candidatura> candidaturas, String caminho) {
        StringBuilder sb = new StringBuilder("=== Relatório de Candidaturas ===\n");
        for (Candidatura c : candidaturas) {
            sb.append(String.format("ID: %s | Aluno ID: %s | Vaga ID: %s | Status: %s | Data: %s%n",
                    c.getId(), c.getAlunoId(), c.getVagaId(), c.getStatus(), c.getDataCandidatura()));
        }
        Arquivo.writerFile(sb.toString(), caminho, false);
    }
}