import { Weight } from "./Weight.js";
import { Answer } from "./Answer.js";


export class Exam{
    private pesos : Weight;
    private gabarito : Answer;
    constructor(pesos : Weight, gabarito : Answer){
        this.pesos = pesos;
        this.gabarito = gabarito;
    }
    //corrige os exames
    resultado(respostas: string[]): number{
        return this.gabarito.comparador(respostas, this.pesos.getWeights());
        
    }


}
