package gui;

import model.UsuarioAdmin;
import service.UsuarioAdminService;

import javax.swing.*;
import java.awt.*;

public class LoginGui extends JFrame {

    private final UsuarioAdminService service;
    private JTextField campEmail;
    private JPasswordField campSenha;
    private JButton btnEntrar;
    private JLabel labelErro;

    public LoginGui() {
        this.service = new UsuarioAdminService();
        configurarJanela();
        construirLayout();
    }

    private void configurarJanela() {
        setTitle("Portal de Estágios UniALFA — Login");
        setSize(420, 340);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);
    }

    private void construirLayout() {
        JPanel painel = new JPanel(new GridBagLayout());
        painel.setBackground(new Color(245, 245, 250));
        painel.setBorder(BorderFactory.createEmptyBorder(30, 40, 30, 40));

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.insets = new Insets(8, 0, 8, 0);

        JLabel titulo = new JLabel("Back Office UniALFA", SwingConstants.CENTER);
        titulo.setFont(new Font("Segoe UI", Font.BOLD, 20));
        titulo.setForeground(new Color(30, 80, 160));
        gbc.gridx = 0; gbc.gridy = 0; gbc.gridwidth = 2;
        painel.add(titulo, gbc);

        JLabel lblEmail = new JLabel("E-mail:");
        lblEmail.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        gbc.gridx = 0; gbc.gridy = 1; gbc.gridwidth = 2;
        painel.add(lblEmail, gbc);

        campEmail = new JTextField();
        campEmail.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        campEmail.setPreferredSize(new Dimension(300, 36));
        gbc.gridx = 0; gbc.gridy = 2; gbc.gridwidth = 2;
        painel.add(campEmail, gbc);

        JLabel lblSenha = new JLabel("Senha:");
        lblSenha.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        gbc.gridx = 0; gbc.gridy = 3; gbc.gridwidth = 2;
        painel.add(lblSenha, gbc);

        campSenha = new JPasswordField();
        campSenha.setFont(new Font("Segoe UI", Font.PLAIN, 14));
        campSenha.setPreferredSize(new Dimension(300, 36));
        gbc.gridx = 0; gbc.gridy = 4; gbc.gridwidth = 2;
        painel.add(campSenha, gbc);

        labelErro = new JLabel("", SwingConstants.CENTER);
        labelErro.setForeground(Color.RED);
        labelErro.setFont(new Font("Segoe UI", Font.ITALIC, 12));
        gbc.gridx = 0; gbc.gridy = 5; gbc.gridwidth = 2;
        painel.add(labelErro, gbc);

        btnEntrar = new JButton("Entrar");
        btnEntrar.setFont(new Font("Segoe UI", Font.BOLD, 14));
        btnEntrar.setBackground(new Color(30, 80, 160));
        btnEntrar.setForeground(Color.WHITE);
        btnEntrar.setFocusPainted(false);
        btnEntrar.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        gbc.gridx = 0; gbc.gridy = 6; gbc.gridwidth = 2;
        painel.add(btnEntrar, gbc);

        btnEntrar.addActionListener(e -> realizarLogin());
        campSenha.addActionListener(e -> realizarLogin());

        add(painel);
    }

    private void realizarLogin() {
        String email = campEmail.getText().trim();
        String senha = new String(campSenha.getPassword());

        btnEntrar.setEnabled(false);
        labelErro.setText("");

        try {
            UsuarioAdmin admin = service.autenticar(email, senha);
            dispose();
            new PrincipalGui(admin).setVisible(true);
        } catch (Exception ex) {
            labelErro.setText(ex.getMessage());
            btnEntrar.setEnabled(true);
            campSenha.setText("");
            campSenha.requestFocus();
        }
    }
}
