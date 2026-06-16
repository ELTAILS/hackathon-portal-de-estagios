package gui;

import service.*;
import utils.RelatorioUtil;

import javax.swing.*;
import java.awt.*;
import java.io.File;

public class RelatorioGui extends JPanel {

    private final AlunoService alunoService             = new AlunoService();
    private final EmpresaService empresaService         = new EmpresaService();
    private final VagaService vagaService               = new VagaService();
    private final CandidaturaService candidaturaService = new CandidaturaService();

    public RelatorioGui() {
        setLayout(new GridBagLayout());
        setBackground(new Color(240, 242, 248));
        construirLayout();
    }

    private void construirLayout() {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(Color.WHITE);
        card.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(new Color(200, 210, 230)),
                BorderFactory.createEmptyBorder(30, 40, 30, 40)
        ));

        JLabel titulo = new JLabel("Gerar Relatórios");
        titulo.setFont(new Font("Segoe UI", Font.BOLD, 20));
        titulo.setForeground(new Color(30, 80, 160));
        titulo.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(titulo);
        card.add(Box.createVerticalStrut(10));

        JLabel sub = new JLabel("Escolha o relatório para exportar em .txt");
        sub.setFont(new Font("Segoe UI", Font.PLAIN, 13));
        sub.setForeground(Color.GRAY);
        sub.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(sub);
        card.add(Box.createVerticalStrut(25));

        card.add(criarBotaoRelatorio("Relatório de Empresas",     () -> gerarRelatorio("empresas")));
        card.add(Box.createVerticalStrut(12));
        card.add(criarBotaoRelatorio("Relatório de Alunos",       () -> gerarRelatorio("alunos")));
        card.add(Box.createVerticalStrut(12));
        card.add(criarBotaoRelatorio("Relatório de Vagas",        () -> gerarRelatorio("vagas")));
        card.add(Box.createVerticalStrut(12));
        card.add(criarBotaoRelatorio("Relatório de Candidaturas", () -> gerarRelatorio("candidaturas")));

        add(card);
    }

    private JButton criarBotaoRelatorio(String texto, Runnable acao) {
        JButton btn = new JButton(texto);
        btn.setAlignmentX(Component.CENTER_ALIGNMENT);
        btn.setMaximumSize(new Dimension(300, 44));
        btn.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        btn.setBackground(new Color(30, 80, 160));
        btn.setForeground(Color.WHITE);
        btn.setFocusPainted(false);
        btn.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        btn.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
        btn.addActionListener(e -> acao.run());
        return btn;
    }

    private void gerarRelatorio(String tipo) {
        JFileChooser chooser = new JFileChooser();
        chooser.setSelectedFile(new File("relatorio_" + tipo + ".txt"));

        if (chooser.showSaveDialog(this) != JFileChooser.APPROVE_OPTION) return;

        String caminho = chooser.getSelectedFile().getAbsolutePath();

        try {
            switch (tipo) {
                case "empresas"     -> RelatorioUtil.gerarRelatorioEmpresas(empresaService.buscarTodos(), caminho);
                case "alunos"       -> RelatorioUtil.gerarRelatorioAlunos(alunoService.buscarTodos(), caminho);
                case "vagas"        -> RelatorioUtil.gerarRelatorioVagas(vagaService.buscarTodos(), caminho);
                case "candidaturas" -> RelatorioUtil.gerarRelatorioCandidaturas(candidaturaService.buscarTodos(), caminho);
            }
            JOptionPane.showMessageDialog(this,
                    "Relatório gerado com sucesso!\n" + caminho,
                    "Sucesso", JOptionPane.INFORMATION_MESSAGE);
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(this,
                    "Erro ao gerar relatório: " + ex.getMessage(),
                    "Erro", JOptionPane.ERROR_MESSAGE);
        }
    }
}