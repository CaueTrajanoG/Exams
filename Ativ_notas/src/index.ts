export const numero: number = 10;

let nome: string = "Francisco";
let disciplina: string = "PWEB 1";
let ano = 2025;
let nome_disciplina = `${nome}, ${disciplina}`;

console.log( String(ano).toUpperCase() );


/*
type Shape = 'circle' | 'square' | 'triangle';
function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return Math.PI * 2;
    case 'square':
      return 10 * 2;
    case 'triangle':
      return 10 * 5;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log( getArea('square,,').toFixed(2) );
*/