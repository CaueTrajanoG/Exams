//tipos basicos;

let age : number = 5;

console.log(age);

const numeros : number[] = [2,4,5,6];
const booleans: boolean = true;
let nome : string = "José";
//Tupla

const person: [number, string, boolean] = [13, "carlos", true];


// lista de tuplas

let peoples : [number, string] [] = [
    [1,'joao'],
    [2, 'gabi'],
    [3, 'dani']
];

//intersections
// a variavel pode receber mais de um formato
let product: string | number | boolean = "vassoura";
product = 2;

// Enum
enum direction {
    up = 1,
    down = 2,
    right = 3,
    left = 4
}

console.log(direction.down);

// type assertions
//tratar uma variavel de um tipo como se fosse de outro tipo

let productName : any = 'Bone';

//pode ser assim
let coisa : string = productName as string;
//assim
coisa = productName as string;
//ou assim
let outronome = <string>productName;


//functions
const sum = (x:number, y:number): number =>
    {return x+y};

//ele ja transforma a variavel em number
const value = sum(1,2);

//function sem retorno
const log = (message: string): void => {
    console.log(message);
}

//interfaces com functions

interface MathFunc {
    (x: number , y:number): number;
}

const soma = (x:number, y:number): number => {
    return x+y;
};
const sub = (x:number, y:number): number =>{
    return x-y;
};



//interface para classes
interface Ipessoa{
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

// classes 

class Pessoa implements Ipessoa{
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName(): string{
        return this.name;
    }    
}
const pessoa1 = new Pessoa(2,'jose',12);
console.log(pessoa1.sayMyName);


class Employee extends Pessoa {
    constructor(id:number, name: string, age:number){
        super(id,name,age);
    }
    whoAmI(){
        return this.name;
    }
}


// declarar classes de fprma compacta

class PersonRefact {
    constructor(readonly id : number,name : string,age: number){

    }
}




