export class Weight {
    constructor(pesos) {
        this.weights = pesos;
    }
    getWeights() {
        return this.weights;
    }
    somaDosPesos() {
        let soma = 0;
        this.weights.forEach((valor) => {
            soma += valor;
        });
        return soma;
    }
}
//# sourceMappingURL=Weight.js.map