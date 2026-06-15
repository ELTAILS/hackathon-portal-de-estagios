import { Request, Response, NextFunction } from "express";
export declare class CandidaturaController {
    listar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    buscar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    listarPorAluno(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    listarPorVaga(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    criar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    atualizarStatus(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
//# sourceMappingURL=CandidaturaController.d.ts.map