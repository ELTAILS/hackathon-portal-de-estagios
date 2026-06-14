<?php

require_once __DIR__ . "/enum/StatusVagas.php";

class Vaga
{
    private int $empresa_id;
    private string $titulo;
    private string $descricao;
    private string $area;
    private StatusVaga $status;

    public function __construct(int $empresa_id, string $titulo, string $descricao, string $area, StatusVaga $status = StatusVaga::ABERTA)
    {
        $this->empresa_id = $empresa_id;
        $this->titulo = $titulo;
        $this->descricao = $descricao;
        $this->area = $area;
        $this->status = $status;
    }

    public function getEmpresaId(): int
    {
        return $this->empresa_id;
    }

    public function setEmpresaId(int $empresa_id): void
    {
        $this->empresa_id = $empresa_id;
    }

    public function getTitulo(): string
    {
        return $this->titulo;
    }

    public function setTitulo(string $titulo): void
    {
        $this->titulo = $titulo;
    }

    public function getDescricao(): string
    {
        return $this->descricao;
    }

    public function setDescricao(string $descricao): void
    {
        $this->descricao = $descricao;
    }

    public function getArea(): string
    {
        return $this->area;
    }

    public function setArea(string $area): void
    {
        $this->area = $area;
    }

    public function getStatus(): StatusVaga
    {
        return $this->status;
    }

    public function setStatus(StatusVaga $status): void
    {
        $this->status = $status;
    }

}