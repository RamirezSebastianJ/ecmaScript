//====================Object.always permite devolver claves y valores de una matriz
const data = {
    frontend: 'Juan', 
    backend: 'Sebastian',
}

//Tranformar el objecto en un matriz
const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

const data ={
    frontend: 'Juan', 
    backend: 'Sebastian',
}

//Captura de solo valores
const values = Object.values(data);
console.log(values);
console.log(values.length);

//====================padding
const strings = 'hellow';
console.log(strings.padStart(7, 'Hi')); //Tratta de agregar la nueva cadena al inicio sin pasar la longitud de 7
console.log(strings.padEnd(7, '------'));//Tratta de agregar la nueva cadena al final sin pasar la longitud de 7