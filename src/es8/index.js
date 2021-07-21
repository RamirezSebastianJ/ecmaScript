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


//====================Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve(helloWorld), 3000)
            : reject(new Error('Test Error'));
        
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//Forma correcta de ejecucion
const anotherFunc = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunc();