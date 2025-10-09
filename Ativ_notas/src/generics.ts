const returnValue = <T>(value: T) => value;

const message = returnValue<string>('hello word');
const count = returnValue<number>(2);

function getFirstValueFromArray<T>(array: T[]){
    return array[0];
}

const FirstValueFromStringArray = getFirstValueFromArray<string>(['1','2']);
const FirstValueFromNumberArray = getFirstValueFromArray<number>([1, 2]);


//Promises

//usado para funções assincronas
const returnPromise = async(): Promise<number> => {
    return 5;
}