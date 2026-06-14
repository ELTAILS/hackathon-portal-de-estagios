<?php 

require_once __DIR__ . '/enum/StatusCandidaturas.php';

class Canditatura
{
    private int $aluno_id;
    private int $vaga_id;
    private StatusCandidaturas $status;
    private string $data;

    public function __construct(int $aluno_id, int $vaga_id, StatusCandidaturas $status = StatusCandidaturas::EM_ANALISE, string $data = '')
    {
        $this->aluno_id = $aluno_id;
        $this->vaga_id = $vaga_id;
        $this->status = $status;
        $this->data = $data;
    }

    public function getAlunoId(): int
    {
        return $this->aluno_id;
    }

    public function setAlunoId(int $aluno_id): void
    {
        $this->aluno_id = $aluno_id;
    }

    public function getVagaId(): int
    {
        return $this->vaga_id;
    }

    public function setVagaId(int $vaga_id): void
    {
        $this->vaga_id = $vaga_id;
    }

    public function getStatus(): StatusCandidaturas
    {
        return $this->status;
    }

    public function setStatus(StatusCandidaturas $status): void
    {
        $this->status = $status;
    }

    public function getData(): string
    {
        return $this->data;
    }

    public function setData(string $data): void
    {
        $this->data = $data;
    }
}