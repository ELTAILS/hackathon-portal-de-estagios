<?php 

require_once "./php/classes/enum/StatusEnum.php";

class Empresa
{
    private string $nome;
    private string $cnpj;
    private string $email;
    private string $senha;
    private EmpresaStatus $status;

    public function __construct(string $nome, string $cnpj, string $email, string $senha, EmpresaStatus $status = EmpresaStatus::PENDENTE)
    {
        $this->nome = $nome;
        $this->cnpj = $cnpj;
        $this->email = $email;
        $this->senha = $senha;
        $this->status = $status;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function getCnpj(): string
    {
        return $this->cnpj;
    }

    public function setCnpj(string $cnpj): void
    {
        $this->cnpj = $cnpj;
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

    public function getStatus(): EmpresaStatus
    {
        return $this->status;
    }

    public function setStatus(EmpresaStatus $status): void
    {
        $this->status = $status;
    }

}