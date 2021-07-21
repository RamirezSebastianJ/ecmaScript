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