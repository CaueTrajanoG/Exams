import { Weight } from "./Weight.js";
import { Answer } from "./Answer.js";
export class Exam {
    constructor(pesos, gabarito) {
        this.pesos = pesos;
        this.gabarito = gabarito;
    }
    //corrige os exames
    resultado(respostas) {
        return this.gabarito.comparador(respostas, this.pesos.getWeights());
    }
}
//# sourceMappingURL=Exames.js.map