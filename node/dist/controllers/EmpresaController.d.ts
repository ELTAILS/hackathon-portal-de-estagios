import { Request, Response, NextFunction } from "express";
export declare class EmpresaController {
    listar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    buscar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    criar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    atualizar(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    remover(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
//# sourceMappingURL=EmpresaController.d.ts.map