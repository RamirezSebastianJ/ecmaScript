//====================Array.flat
let array = [1,2,3, [1,2,3, [1,2,3, [1,2,3, []]]]];
console.log(array.flat(3));
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));

//====================trimStart
let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart()); //eliminacion de espacios al incio

hello = ' hello world    '; 
console.log(hello);
console.log(hello.trimEnd()); //eliminacion de espacios al final

//====================Optinal cath

try {
    
} catch {
    error
}

//====================fromEntries

let entries = [['name', 'juan'], ['age', 21]];
console.log(Object.fromEntries(entries)); //construccion de objetos provenientes de un arreglo

//====================Objeto de tipo symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);