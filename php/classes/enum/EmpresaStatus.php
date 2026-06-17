<?php 

enum EmpresaStatus: string {
    case PENDENTE  = 'pendente';
    case APROVADA  = 'aprovada';
    case BLOQUEADA = 'bloqueada';
}