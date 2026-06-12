import { FonteDados } from "../config/database";
import { Vaga } from "../models/Vaga";

export const VagaRepository = FonteDados.getRepository(Vaga);