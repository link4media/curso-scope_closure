var firstName; // valor undefined
firstName = 'Juan'; // Asignamos
console.log(firstName); // Mostramos

var lastName = 'Carrera'; // Declaramos y asignamos
lastName = 'Carrillo'; // Re asignamos
console.log(lastName); // Mostramos

var secondName = 'Carlos'; // Declaramos y asignamos
var secondName = 'Jose'; // Re declaramos y re asignamos
console.log(secondName); // Mostramos


// let: se puede re asignar pero no re declarar

let fruit = 'Apple'; // Declaramos y asignamos
fruit = 'Kiwi'; // re asignar
console.log(fruit);

//let fruit = 'Banana'; // no nos permite


// const: no se puede ni re asignar ni re declarar

const animal = 'dog'; // Declara y asigna
//animal = 'cat'; // no permite re asignar
//const animal = 'bird';
console.log(animal);

// Funciona porque está luego de declarar el array
const vehicles = [];
vehicles.push("hola");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);