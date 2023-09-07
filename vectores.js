// si el vector contiene un elemento
var frutas = ["Manzana", "Pera", "Banano", "Mandarina"];

console.log(frutas.includes("Pera"));
console.log(frutas.includes("Pollo"));

console.log("");

// si todos los elementos cumplen una misma condicion
var numeros = [1, 2, 3, 4, 5];

//todos deben cumplir la condicion, si uno solo no cumple, ya es falso
var son_positivos = numeros.every( (num) => {return num > 0;});
var son_mayores_cinco = numeros.every( (num) => {return num > 5});

console.log(son_positivos);
console.log(son_mayores_cinco);

//Convertir string en vector
var palabra = "Henri";
var vector = palabra.split('');
console.log(vector);
vector.pop();
vector.push('y');
console.log(vector);
palabra = vector.join('');
console.log(palabra);
console.log("");

palabra = "XD el que lo lea";
var vector = palabra.split(' ');
console.log(vector);
vector.shift();
vector.unshift("Otro");
console.log(vector);
palabra = vector.join(' ');
console.log(palabra);
console.log("");

palabra = "1;2;22;23344;hola";
var vector = palabra.split(';');
console.log(vector);
console.log("\n");

//for each
var numeros = [1, 2, 3, 4];

numeros.forEach( (num) => {
    console.log(num);
});
console.log(numeros);
console.log("");

//map <- copia del arreglo original y puede realizar cambios
var suma_uno = numeros.map( (num) => {return num+1;});
console.log(suma_uno);

