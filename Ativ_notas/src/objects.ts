//type é basicamente um objeto
type Order = {
    productId : string;
    price : number;
};

type User = {
    firstName: string
    age: number;
    email?: string;
    password?: string;
    orders?: Order[]
}

//instanciar o objeto
const user:User ={
    firstName: "gabi",
    age: 19,
    orders: [{productId: '1', price: 23}]
}

//Unions

type Author = {
    books : string[];
}

const autor: Author & User = {
    firstName : "Sphor",
    age : 33,
    books : ["the battle of apocalipse", 'nada']
}


//Interfaces

interface UserInterface {

    //depois de instanciado não pode mais ser modificado
    readonly firstName : string,
    age : number
}

const usuario : UserInterface = {
    firstName : "carlos",
    age : 33
}

// esse objeto é tanto um type quanto uma interface
const newAuthor : UserInterface & Author = {
    firstName : 'juca',
    age : 66,
    books : []
}
