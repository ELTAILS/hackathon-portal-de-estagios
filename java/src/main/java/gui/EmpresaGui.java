package gui;

import java.model.Empresa;
import java.service.EmpresaService;

import javax.swing.*;
import java.awt.*;
import java.util.List;

public class EmpresaGui extends PainelBase {

    private final EmpresaService service;

    public EmpresaGui() {
        super("Gestão de Empresas",
                new String[]{"ID", "Nome", "CNPJ", "E-mail", "Status"});
        this.service = new EmpresaService();
        adicionarBotoes();
    }

    private void adicionarBotoes() {
        JButton btnAprovar  = criarBotao("Aprovar",    new Color(40, 160, 80));
        JButton btnBloquear = criarBotao("Bloquear",   new Color(200, 60, 60));
        JButton btnAtualizar = criarBotao("Atualizar", new Color(30, 80, 160));

        painelBotoes.add(btnAprovar);
        painelBotoes.add(btnBloquear);
        painelBotoes.add(btnAtualizar);

        btnAprovar.addActionListener(e -> aprovarEmpresa());
        btnBloquear.addActionListener(e -> bloquearEmpresa());
        btnAtualizar.addActionListener(e -> carregarDados());
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
        List<Empresa> empresas = service.buscarTodos();
        for (Empresa e : empresas) {
            modeloTabela.addRow(new Object[]{
                    e.getId(), e.getNome(), e.getCnpj(), e.getEmail(), e.getStatus()
            });
        }
    }

    private void aprovarEmpresa() {
        int id = getIdSelecionado();
        if (id == -1) { mostrarErro("Selecione uma empresa na tabela."); return; }
        try {
            service.aprovar(id);
            mostrarSucesso("Empresa aprovada com sucesso!");
            carregarDados();
        } catch (Exception ex) {
            mostrarErro(ex.getMessage());
        }
    }

    private void bloquearEmpresa() {
        int id = getIdSelecionado();
        if (id == -1) { mostrarErro("Selecione uma empresa na tabela."); return; }

        int confirm = JOptionPane.showConfirmDialog(this,
                "Deseja realmente bloquear esta empresa?", "Confirmar", JOptionPane.YES_NO_OPTION);
        if (confirm != JOptionPane.YES_OPTION) return;

        try {
            service.bloquear(id);
            mostrarSucesso("Empresa bloqueada.");
            carregarDados();
        } catch (Exception ex) {
            mostrarErro(ex.getMessage());
        }
    }
}