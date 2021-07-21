//====================Parametros por defecto

//Antes de ECMAScript6
function newFunction(name, age, country){
    var name = name || 'Juan';
    var age = age || 21;
    var country = country || 'COL';
    console.log(name, age, country);
}

//ECMAScript6
//Paso de parametros con valores por defecto
function newFunctionES6(name = 'Juan', age = 21, country = 'COL'){
    console.log(name, age, country);
}

//Formas de llamar/invocar la funcion en ECMAScript6
newFunctionES6();
newFunctionES6('Sebastian', '30', 'MX');

//====================Templates Literal
//Permiten unir o separar varios elementos

//Antes de ECMAScript6
let hello = 'Hello';
let world = 'world';
let phrase = hello + ' ' + world;
console.log(phrase);

//ECMAScript6
let phraseES6 = `${hello} ${world}`;
console.log(phraseES6);

//====================Multilinea
//Antes de ECMAScript6
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit \n'
    +'. Praesent in erat elementum, pulvinar dolor ac, faucibus mi.\n'
    +'Vestibulum suscipit ante vitae nunc dignissim pellentesque.\n'
    +'Vivamus et nisl suscipit, feugiat dui quis, ultrices erat.';
console.log(lorem);

//ECMAScript6
let loremES6 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Praesent in erat elementum, pulvinar dolor ac, faucibus mi. Vestibulum 
    suscipit ante vitae nunc dignissim pellentesque. Vivamus et nisl suscipit, 
    feugiat dui quis, ultrices erat.`;

console.log(loremES6);

//====================Destructuracion de elementos
let person = {
    'name': 'Juan',
    'age': 21,
    'country': 'COL'
}

console.log(person.name, person.age, person.country);


//====================Operador de Propagacion ...
console.log(name, age, country);

let team1 = [
    'Oscar', 'Ricardo', 'Omar'
];

let team2 = [
    'Manuela', 'Patricia', 'Caamila'
];

let education = ['David',...team1, ...team2];

console.log(education);

//====================Declaracion de variables
//Antes de ECMAScript6
var hola = 'hola'; //varibale duisponible de forma global

{
    var global = 'Global Var'; //La variable queda accesible por todo el codigo
}

{
    let globalLet = 'global Let';//la variable solo se puede acceder por este bloque de coidgo
    console.log(globalLet);
}

console.log(global);
//console.log(globalLet);//return Error

//====================Constantes
const a = 'b';
/*
a = 'a'; //return error
*/
console.log(a);

//====================Objetos (Asignacion)
//Antes de ECMAScript6
let name = 'oscar';
let age = 32;

obj = { name: name, age: age};

console.log(obj);

//ECMAScript6
obj2 = { name, age};
console.log(obj2);

//====================Arround Function
const names = [
    {
        name: 'Juan', 'age': 21
    },
    {
        name: 'Sebastian', 'age': 30
    }
]

//Antes de ECMAScript6. Funciones anonimas
let listOfNames = names.map(function(item) {
    console.log(item.name);
});

//ECMAScript6 Arround Function
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (names, age, country) => {
    
};

const listOfNames4 = name => {

};

const square = num => num*num;


//====================Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Perfect!")
        }else{
            reject("Ups!!!");
        }
    })
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));