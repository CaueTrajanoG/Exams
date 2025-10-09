export class Weight{
    private weights: number[];

    constructor(pesos: number[]){
        this.weights = pesos;
    }

    getWeights():number[]{
        return this.weights;
    }
    somaDosPesos():number{
        let soma = 0;
        this.weights.forEach((valor)=> {
            soma += valor;
        })
        return soma;
    }
}