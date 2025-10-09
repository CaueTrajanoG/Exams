import { Weight } from "./Weight.js";
import { Answer } from "./Answer.js";
export declare class Exam {
    private pesos;
    private gabarito;
    constructor(pesos: Weight, gabarito: Answer);
    resultado(respostas: string[]): number;
}
//# sourceMappingURL=Exames.d.ts.map