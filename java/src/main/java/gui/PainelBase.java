package gui;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public abstract class PainelBase extends JPanel {

    protected JTable tabela;
    protected DefaultTableModel modeloTabela;
    protected JPanel painelBotoes;

    public PainelBase(String titulo, String[] colunas) {
        setLayout(new BorderLayout());
        setBackground(new Color(240, 242, 248));
        setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        add(criarCabecalho(titulo), BorderLayout.NORTH);
        add(criarTabela(colunas),   BorderLayout.CENTER);

        painelBotoes = new JPanel(new FlowLayout(FlowLayout.LEFT, 10, 10));
        painelBotoes.setBackground(new Color(240, 242, 248));
        add(painelBotoes, BorderLayout.SOUTH);

        carregarDados();
    }

    private JPanel criarCabecalho(String titulo) {
        JPanel cab = new JPanel(new BorderLayout());
        cab.setBackground(new Color(240, 242, 248));
        cab.setBorder(BorderFactory.createEmptyBorder(0, 0, 15, 0));

        JLabel lbl = new JLabel(titulo);
        lbl.setFont(new Font("Segoe UI", Font.BOLD, 22));
        lbl.setForeground(new Color(30, 80, 160));
        cab.add(lbl, BorderLayout.WEST);

        return cab;
    }

    private JScrollPane criarTabela(String[] colunas) {
        modeloTabela = new DefaultTableModel(colunas, 0) {
            @Override
            public boolean isCellEditable(int row, int col) { return false; }
        };

        tabela = new JTable(modeloTabela);
        tabela.setFont(new Font("Segoe UI", Font.PLAIN, 13));
        tabela.setRowHeight(32);
        tabela.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        tabela.getTableHeader().setFont(new Font("Segoe UI", Font.BOLD, 13));
        tabela.getTableHeader().setBackground(new Color(30, 80, 160));
        tabela.getTableHeader().setForeground(Color.WHITE);
        tabela.setGridColor(new Color(220, 220, 230));
        tabela.setSelectionBackground(new Color(180, 210, 255));

        JScrollPane scroll = new JScrollPane(tabela);
        scroll.setBorder(BorderFactory.createLineBorder(new Color(200, 210, 230)));
        return scroll;
    }

    protected int getIdSelecionado() {
        int linha = tabela.getSelectedRow();
        if (linha == -1) return -1;
        return (Integer) modeloTabela.getValueAt(linha, 0);
    }

    protected void mostrarErro(String msg) {
        JOptionPane.showMessageDialog(this, msg, "Erro", JOptionPane.ERROR_MESSAGE);
    }

    protected void mostrarSucesso(String msg) {
        JOptionPane.showMessageDialog(this, msg, "Sucesso", JOptionPane.INFORMATION_MESSAGE);
    }

    protected abstract void carregarDados();
}
