<?php 

class Aluno
{
    private string $nome;
    private string $email;
    private string $senha;
    private string $ra;
    private string $curso;
    private bool $ativo;

    public function __construct(string $nome, string $email, string $senha, string $ra, string $curso, bool $ativo = true)
    {
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
        $this->ra = $ra;
        $this->curso = $curso;
        $this->ativo = $ativo;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getSenha(): string
    {
        return $this->senha;
    }

    public function setSenha(string $senha): void
    {
        $this->senha = $senha;
    }

    public function getRa(): string
    {
        return $this->ra;
    }

    public function setRa(string $ra): void
    {
        $this->ra = $ra;
    }

    public function getCurso(): string
    {
        return $this->curso;
    }

    public function setCurso(string $curso): void
    {
        $this->curso = $curso;
    }

    public function isAtivo(): bool
    {
        return $this->ativo;
    }

    public function setAtivo(bool $ativo): void
    {
        $this->ativo = $ativo;
    }

}