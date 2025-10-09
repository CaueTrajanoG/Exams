export class Answer {
    constructor(answers) {
        this.answers = answers;
    }
    getAnswers() {
        return this.answers;
    }
    comparador(respostasEstudante, pesos) {
        let total = 0;
        let pesoTotal = 0;
        for (let i = 0; i < 5; i++) {
            if (respostasEstudante[i] === this.answers[i]) {
                total += pesos[i];
            }
            pesoTotal += pesos[i];
        }
        return (total / pesoTotal) * 10;
    }
}
//# sourceMappingURL=Answer.js.map