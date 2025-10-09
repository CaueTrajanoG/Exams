//tipos basicos;
let age = 5;
console.log(age);
const numeros = [2, 4, 5, 6];
const booleans = true;
let nome = "José";
//Tupla
const person = [13, "carlos", true];
// lista de tuplas
let peoples = [
    [1, 'joao'],
    [2, 'gabi'],
    [3, 'dani']
];
//intersections
// a variavel pode receber mais de um formato
let product = "vassoura";
product = 2;
// Enum
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["right"] = 3] = "right";
    direction[direction["left"] = 4] = "left";
})(direction || (direction = {}));
console.log(direction.down);
// type assertions
//tratar uma variavel de um tipo como se fosse de outro tipo
let productName = 'Bone';
//pode ser assim
let coisa = productName;
//assim
coisa = productName;
//ou assim
let outronome = productName;
//functions
const sum = (x, y) => { return x + y; };
//ele ja transforma a variavel em number
const value = sum(1, 2);
//function sem retorno
const log = (message) => {
    console.log(message);
};
const soma = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
// classes 
class Pessoa {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
const pessoa1 = new Pessoa(2, 'jose', 12);
console.log(pessoa1.sayMyName);
class Employee extends Pessoa {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoAmI() {
        return this.name;
    }
}
// declarar classes de fprma compacta
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
    }
}
export {};
//# sourceMappingURL=classes.js.map