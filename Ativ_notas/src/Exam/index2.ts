import { Weight } from "./Weight.js";
import { Answer } from "./Answer.js";
import { Exam } from "./Exames.js";

// criar pesos pro gabarito
const pesos = new Weight([1,1,3,1,1]);
// criando gabarito
const gab = new Answer(['a','b','a','c','d']);

//criando exame
const exame = new Exam(pesos, gab);

const aluno1 = ['a','b','a','c','d'];
const aluno2 = ['b','b','a','c','d'];
const aluno3 = ['c','b','a','c','a'];

console.log("Aluno 1:", exame.resultado(aluno1).toFixed(2));
console.log("Aluno 2:", exame.resultado(aluno2).toFixed(2));
console.log("Aluno 3:", exame.resultado(aluno3).toFixed(2));
