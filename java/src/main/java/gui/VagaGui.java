package gui;

import java.model.Vaga;
import java.service.VagaService;

import javax.swing.*;
import java.awt.*;

public class VagaGui extends PainelBase {

    private final VagaService service;

    public VagaGui() {
        super("Vagas Cadastradas",
                new String[]{"ID", "Empresa ID", "Título", "Área", "Status", "Criada em"});
        this.service = new VagaService();
        adicionarBotoes();
    }

    private void adicionarBotoes() {
        JButton btnEncerrar = criarBotao("Encerrar Vaga", new Color(180, 80, 40));
        JButton btnRefresh  = criarBotao("Atualizar",     new Color(30, 80, 160));

        painelBotoes.add(btnEncerrar);
        painelBotoes.add(btnRefresh);

        btnEncerrar.addActionListener(e -> encerrarVaga());
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
        for (Vaga v : service.buscarTodos()) {
            modeloTabela.addRow(new Object[]{
                    v.getId(), v.getEmpresaId(), v.getTitulo(),
                    v.getArea(), v.getStatus(),
                    v.getCriadaEm().toLocalDate()
            });
        }
    }

    private void encerrarVaga() {
        int id = getIdSelecionado();
        if (id == -1) { mostrarErro("Selecione uma vaga."); return; }

        int c = JOptionPane.showConfirmDialog(this,
                "Encerrar esta vaga?", "Confirmar", JOptionPane.YES_NO_OPTION);
        if (c != JOptionPane.YES_OPTION) return;

        try {
            service.encerrar(id);
            mostrarSucesso("Vaga encerrada.");
            carregarDados();
        } catch (Exception ex) {
            mostrarErro(ex.getMessage());
        }
    }
}