package gui;

import model.UsuarioAdmin;

import javax.swing.*;
import java.awt.*;

public class PrincipalGui extends JFrame {

    private final UsuarioAdmin adminLogado;
    private JPanel painelConteudo;

    public PrincipalGui(UsuarioAdmin admin) {
        this.adminLogado = admin;
        configurarJanela();
        construirLayout();
    }

    private void configurarJanela() {
        setTitle("Portal de Estágios UniALFA — Back Office");
        setSize(1024, 680);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setMinimumSize(new Dimension(800, 600));
    }

    private void construirLayout() {
        setLayout(new BorderLayout());
        add(criarCabecalho(), BorderLayout.NORTH);
        add(criarMenuLateral(), BorderLayout.WEST);

        painelConteudo = new JPanel(new BorderLayout());
        painelConteudo.setBackground(new Color(240, 242, 248));
        add(painelConteudo, BorderLayout.CENTER);

        mostrarBoasVindas();
    }

    private JPanel criarCabecalho() {
        JPanel cab = new JPanel(new BorderLayout());
        cab.setBackground(new Color(30, 80, 160));
        cab.setPreferredSize(new Dimension(0, 60));
        cab.setBorder(BorderFactory.createEmptyBorder(0, 20, 0, 20));

        JLabel titulo = new JLabel("Portal de Estágios UniALFA");
        titulo.setFont(new Font("Segoe UI", Font.BOLD, 18));
        titulo.setForeground(Color.WHITE);
        cab.add(titulo, BorderLayout.WEST);

        JLabel usuario = new JLabel("👤 " + adminLogado.getNome() + " — " + adminLogado.getPerfil());
        usuario.setFont(new Font("Segoe UI", Font.PLAIN, 13));
        usuario.setForeground(new Color(200, 220, 255));
        cab.add(usuario, BorderLayout.EAST);

        return cab;
    }

    private JPanel criarMenuLateral() {
        JPanel menu = new JPanel();
        menu.setLayout(new BoxLayout(menu, BoxLayout.Y_AXIS));
        menu.setBackground(new Color(25, 60, 130));
        menu.setPreferredSize(new Dimension(200, 0));
        menu.setBorder(BorderFactory.createEmptyBorder(20, 10, 20, 10));

        menu.add(criarBotaoMenu("Início",        () -> mostrarBoasVindas()));
        menu.add(Box.createVerticalStrut(8));
        menu.add(criarBotaoMenu("Empresas",      () -> abrirPainel(new EmpresaGui())));
        menu.add(Box.createVerticalStrut(8));
        menu.add(criarBotaoMenu("Alunos",        () -> abrirPainel(new AlunoGui())));
        menu.add(Box.createVerticalStrut(8));
        menu.add(criarBotaoMenu("Vagas",         () -> abrirPainel(new VagaGui())));
        menu.add(Box.createVerticalStrut(8));
        menu.add(criarBotaoMenu("Candidaturas",  () -> abrirPainel(new CandidaturaGui())));
        menu.add(Box.createVerticalStrut(8));
        menu.add(criarBotaoMenu("Relatórios",    () -> abrirPainel(new RelatorioGui())));
        menu.add(Box.createVerticalGlue());
        menu.add(criarBotaoMenu("Sair", () -> {
            int c = JOptionPane.showConfirmDialog(this,
                    "Deseja realmente sair?", "Confirmar", JOptionPane.YES_NO_OPTION);
            if (c == JOptionPane.YES_OPTION) {
                dispose();
                new LoginGui().setVisible(true);
            }
        }));

        return menu;
    }

    private JButton criarBotaoMenu(String texto, Runnable acao) {
        JButton btn = new JButton(texto);
        btn.setAlignmentX(Component.LEFT_ALIGNMENT);
        btn.setMaximumSize(new Dimension(Integer.MAX_VALUE, 42));
        btn.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        btn.setForeground(Color.WHITE);
        btn.setBackground(new Color(25, 60, 130));
        btn.setBorderPainted(false);
        btn.setFocusPainted(false);
        btn.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        btn.addActionListener(e -> acao.run());

        btn.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseEntered(java.awt.event.MouseEvent e) {
                btn.setBackground(new Color(50, 100, 200));
            }
            public void mouseExited(java.awt.event.MouseEvent e) {
                btn.setBackground(new Color(25, 60, 130));
            }
        });

        return btn;
    }

    private void abrirPainel(JPanel painel) {
        painelConteudo.removeAll();
        painelConteudo.add(painel, BorderLayout.CENTER);
        painelConteudo.revalidate();
        painelConteudo.repaint();
    }

    private void mostrarBoasVindas() {
        JPanel boas = new JPanel(new GridBagLayout());
        boas.setBackground(new Color(240, 242, 248));

        JLabel msg = new JLabel("<html><center>Bem-vindo, <b>" + adminLogado.getNome() +
                "</b>!<br>Selecione uma opção no menu lateral.</center></html>");
        msg.setFont(new Font("Segoe UI", Font.PLAIN, 18));
        msg.setForeground(new Color(60, 60, 80));
        boas.add(msg);

        abrirPainel(boas);
    }
}
