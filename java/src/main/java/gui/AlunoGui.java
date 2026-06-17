package gui;

import model.Aluno;
import service.AlunoService;

import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.awt.*;
import java.util.List;

public class AlunoGui extends PainelBase {

    private final AlunoService service;

    public AlunoGui() {
        super("Gestão de Alunos",
                new String[]{"ID", "Nome", "RA", "Curso", "E-mail", "Apto", "Ativo"});
        this.service = new AlunoService();
        adicionarBotoes();
    }

    private void adicionarBotoes() {
        JButton btnNovo    = criarBotao("Novo",           new Color(30, 80, 160));
        JButton btnEditar  = criarBotao("Editar",          new Color(100, 120, 180));
        JButton btnApto    = criarBotao("Marcar Apto",     new Color(40, 160, 80));
        JButton btnInapto  = criarBotao("Marcar Inapto",   new Color(180, 80, 40));
        JButton btnImport  = criarBotao("Importar .txt",  new Color(80, 80, 80));
        JButton btnRefresh = criarBotao("Atualizar",      new Color(60, 60, 120));

        painelBotoes.add(btnNovo);
        painelBotoes.add(btnEditar);
        painelBotoes.add(btnApto);
        painelBotoes.add(btnInapto);
        painelBotoes.add(btnImport);
        painelBotoes.add(btnRefresh);

        btnNovo.addActionListener(e -> abrirFormulario(null));
        btnEditar.addActionListener(e -> editarSelecionado());
        btnApto.addActionListener(e -> marcarAptidao(true));
        btnInapto.addActionListener(e -> marcarAptidao(false));
        btnImport.addActionListener(e -> importarTxt());
        btnRefresh.addActionListener(e -> carregarDados());
    }

    private JButton criarBotao(String texto, Color cor) {
        JButton btn = new JButton(texto);
        btn.setFont(new Font("Segoe UI", Font.BOLD, 12));
        btn.setBackground(cor);
        btn.setForeground(Color.WHITE);
        btn.setFocusPainted(false);
        btn.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
        btn.setBorder(BorderFactory.createEmptyBorder(8, 12, 8, 12));
        return btn;
    }

    @Override
    protected void carregarDados() {
        modeloTabela.setRowCount(0);
        for (Aluno a : service.buscarTodos()) {
            modeloTabela.addRow(new Object[]{
                    a.getId(), a.getNome(), a.getRa(), a.getCurso(), a.getEmail(),
                    a.isApto()  ? "Sim" : "Não",
                    a.isAtivo() ? "Sim" : "Não"
            });
        }
    }

    private void abrirFormulario(Aluno alunoExistente) {
        boolean editando = alunoExistente != null;
        String titulo    = editando ? "Editar Aluno" : "Novo Aluno";

        JDialog dialog = new JDialog(
                SwingUtilities.getWindowAncestor(this), titulo,
                java.awt.Dialog.ModalityType.APPLICATION_MODAL);
        dialog.setSize(400, 380);
        dialog.setLocationRelativeTo(this);
        dialog.setLayout(new BorderLayout());

        JPanel form = new JPanel(new GridLayout(5, 2, 10, 12));
        form.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));

        JTextField fNome  = new JTextField(editando ? alunoExistente.getNome()  : "");
        JTextField fEmail = new JTextField(editando ? alunoExistente.getEmail() : "");
        JTextField fRa    = new JTextField(editando ? alunoExistente.getRa()    : "");
        JTextField fCurso = new JTextField(editando ? alunoExistente.getCurso() : "");
        JPasswordField fSenha = new JPasswordField();

        form.add(new JLabel("Nome:"));   form.add(fNome);
        form.add(new JLabel("E-mail:")); form.add(fEmail);
        form.add(new JLabel("RA:"));     form.add(fRa);
        form.add(new JLabel("Curso:"));  form.add(fCurso);
        form.add(new JLabel("Senha" + (editando ? " (deixe em branco):" : ":")));
        form.add(fSenha);

        JPanel rodape = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        JButton btnSalvar   = new JButton("Salvar");
        JButton btnCancelar = new JButton("Cancelar");
        rodape.add(btnCancelar);
        rodape.add(btnSalvar);

        btnCancelar.addActionListener(e -> dialog.dispose());
        btnSalvar.addActionListener(e -> {
            try {
                Aluno aluno = editando ? alunoExistente : new Aluno();
                aluno.setNome(fNome.getText().trim());
                aluno.setEmail(fEmail.getText().trim());
                aluno.setRa(fRa.getText().trim());
                aluno.setCurso(fCurso.getText().trim());
                aluno.setAtivo(true);

                String senha = new String(fSenha.getPassword()).trim();
                if (!senha.isBlank()) aluno.setSenhaHash(senha);

                if (editando) service.atualizar(aluno);
                else          service.salvar(aluno);

                mostrarSucesso("Aluno salvo com sucesso!");
                dialog.dispose();
                carregarDados();
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(dialog, ex.getMessage(), "Erro", JOptionPane.ERROR_MESSAGE);
            }
        });

        dialog.add(form, BorderLayout.CENTER);
        dialog.add(rodape, BorderLayout.SOUTH);
        dialog.setVisible(true);
    }

    private void editarSelecionado() {
        int id = getIdSelecionado();
        if (id == -1) { mostrarErro("Selecione um aluno."); return; }
        Aluno aluno = service.buscarPorId(id);
        if (aluno != null) abrirFormulario(aluno);
    }

    private void marcarAptidao(boolean apto) {
        int id = getIdSelecionado();
        if (id == -1) { mostrarErro("Selecione um aluno."); return; }
        try {
            service.marcarComoApto(id, apto);
            mostrarSucesso("Aptidão atualizada.");
            carregarDados();
        } catch (Exception ex) {
            mostrarErro(ex.getMessage());
        }
    }

    private void importarTxt() {
        JFileChooser chooser = new JFileChooser();
        chooser.setFileFilter(new FileNameExtensionFilter("Arquivo de texto (*.txt)", "txt"));

        if (chooser.showOpenDialog(this) != JFileChooser.APPROVE_OPTION) return;

        String caminho = chooser.getSelectedFile().getAbsolutePath();
        try {
            List<String> relatorio = service.importarDeTxt(caminho);

            JTextArea area = new JTextArea(String.join("\n", relatorio));
            area.setEditable(false);
            area.setFont(new Font("Monospaced", Font.PLAIN, 12));

            JScrollPane scroll = new JScrollPane(area);
            scroll.setPreferredSize(new Dimension(500, 300));

            JOptionPane.showMessageDialog(this, scroll,
                    "Resultado da Importação", JOptionPane.INFORMATION_MESSAGE);

            carregarDados();
        } catch (Exception ex) {
            mostrarErro(ex.getMessage());
        }
    }
}
