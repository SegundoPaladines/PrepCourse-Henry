//Clase con atributos y metodos, mediante funcion constructora
function Auto (puertas, color, marca, year, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.year = year;
    this.ruedas = ruedas;

    this.info = function (){
        console.log("Este ees un auto con "+this.puertas+" puertas, el auto es de color "+this.color+" y tiene "+this.ruedas+"ruedas");
    }
}

var auto1 = new Auto(2, "Rojo", "ferrari", 2018, 4);

console.log(auto1);
console.log(auto1.marca);
auto1.info();

console.log("");

//Clases mediante la palabra reservada Class

class Carro{
    constructor(puertas, color, marca, year, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.year = year;
        this.ruedas = ruedas;
    }

    infoAuto(){
        console.log("Este ees un carro con "+this.puertas+" puertas, el auto es de color "+this.color+" y tiene "+this.ruedas+"ruedas");
    }
}

var carro1 = new Carro(4, 'Blanco', 'Fiat', 2015, 4);
console.log(carro1);
console.log(carro1.marca);
carro1.infoAuto();

class Persona{
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("Hola!, mi nombre es: "+this.nombre);
    }
}

var martin = new Persona("Martin", 25);
martin.saludar();

//Verdadera Herencia
class Programador extends Persona{
    constructor(nombre, edad, experiencia){
        //recibir las propiedades heredadas
        //es como llamar a una especie de cosntructor de Persona
        super(nombre, edad);
        this.experiencia = experiencia;
    }
    saludarProg(){
        console.log("Hola, soy "+this.nombre +" codeo desde hace "+this.experiencia);
    }
}

var prog  = new Programador("Dany", 26, 7);
prog.saludarProg();
prog.saludar();