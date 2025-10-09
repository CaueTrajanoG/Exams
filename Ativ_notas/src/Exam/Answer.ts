export class Answer{
    private answers : string[];
    constructor(answers: string[]){
        this.answers = answers;
    }

    getAnswers(): string[]{
        return this.answers;
    }


    comparador(respostasEstudante: string[], pesos: number[]): number{
        let total = 0;
        let pesoTotal = 0;

        for(let i=0; i<5; i++){
            if(respostasEstudante[i] === this.answers[i]){
                total += pesos[i]!;
            }
            pesoTotal += pesos[i]!;
        }
        return (total / pesoTotal) * 10;
    }
}
