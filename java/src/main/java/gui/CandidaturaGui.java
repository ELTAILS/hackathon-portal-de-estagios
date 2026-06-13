package gui;

import java.model.Candidatura;
import java.service.CandidaturaService;

import javax.swing.*;
import java.awt.*;

public class CandidaturaGui extends PainelBase {

    private final CandidaturaService service;

    public CandidaturaGui() {
        super("Candidaturas",
                new String[]{"ID", "Aluno ID", "Vaga ID", "Status", "Data"});
        this.service = new CandidaturaService();
        adicionarBotoes();
    }

    private void adicionarBotoes() {
        JButton btnRefresh = criarBotao("Atualizar", new Color(30, 80, 160));
        painelBotoes.add(btnRefresh);
        btnRefresh.addActionListener(e -> carregarDados());
    }

    private JButton criarBotao(String texto, Color cor) {
        JButton btn = new JButton(texto);
        btn.setFont(new Font("Segoe UI", Font.BOLD, 13));
        btn.setBackground(cor);
        btn.setForeground(Color.WHITE);
        btn.setFocusPainted(false);
        btn.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        btn.setBorder(BorderFactory.createEmptyBorder(8, 16, 8, 16));
        return btn;
    }

    @Override
    protected void carregarDados() {
        modeloTabela.setRowCount(0);
        for (Candidatura c : service.buscarTodos()) {
            modeloTabela.addRow(new Object[]{
                    c.getId(), c.getAlunoId(), c.getVagaId(),
                    c.getStatus(),
                    c.getDataCandidatura().toLocalDate()
            });
        }
    }
}