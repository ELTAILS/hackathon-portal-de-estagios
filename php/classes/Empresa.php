<?php 

require_once __DIR__ . "/enum/EmpresaStatus.php";
require_once __DIR__ . "/Usuario.php";

class Empresa Extends Usuario
{
    private string $cnpj;
    private EmpresaStatus $status;

    public function __construct(int $id, string $nome, string $cnpj, string $email, EmpresaStatus $status = EmpresaStatus::PENDENTE)
    {
        $this->setId($id);
        $this->nome = $nome;
        $this->cnpj = $cnpj;
        $this->email = $email;
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