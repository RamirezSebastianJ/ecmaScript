//operador de reposo
const obj = { 
    name: 'Juan',
    age: 21,
    country: 'COL'
};

let { name, ...all } = obj; //toma name y lo demas lo encapsula por medio del operador ...all
console.log(name, all);
console.log(all);

//====================Union por propagacion
const obj1 = { 
    name: 'Juan',
};

//operador de reposo
const obj2 = {
    ...obj1, //Estructuracion del nuevo objcto basado en la composicion del instanciado
    country: 'COL'
};
console.log(obj2);

//====================Promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    })
};

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    //lo nuevo
    .finally(() =>console.log('Finalizado'));


//====================mejoras rejex
const regexData = /([0-9]{4})-([0-9]{4})-([0-9]{2})/
const match = regexData.exec('2021-04-20');
const year = match[1]
const mount = match[2]
const day = match[3]

console.log(year, month, day);