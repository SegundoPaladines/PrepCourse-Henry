//Objetos
var deportes = {
    conBalon: ["Football", "Bascketball", "Rugby"],
    sinBalon: ["Boxeo", "Natacion", "Surf"]
};

//Objetos anidados
var persona = {
    nombre: "lucas",
    edad: 26,
    estudios: {
        esProgramador: true
    }
};

console.log(persona.edad);

//Reescribir porpiedades
persona.edad = 30;

console.log(persona.edad);

var autos = {};

//Crear propiedades
autos.marcas = ["Chebrolet", "Audi", "Ferrary"];

console.log(autos);

//eliminar propiedades
delete(autos.marcas);
console.log(autos);

var funciones = {
    saludar: function() {
        console.log("Hola!");
    }
};

funciones.saludar();

var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
//Dot Notations
console.log(atuendos.manos);

//Bracket notation
atuendos["piernas"] = ["Bermudas", "Pantalones"];
console.log(atuendos);

var comidas = {};
var diferenciaNotaciones = function(propUno, propDos){
    comidas.propUno = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Hamburguesa", "Papas Fritas"];
};

diferenciaNotaciones("Saludables", "noSaludables");
console.log(comidas);

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };

// si un archivo tiene una propiedad
console.log("");
console.log(libro.hasOwnProperty('nombre'));
console.log(libro.hasOwnProperty('autor'));

//ver todas las propiedades de un objeto
console.log("");
console.log(Object.keys(libro));

// recorrer un objeto

var mundo = {contienentes:7, paises:195, oceanos:5};
for(var prop in mundo){
    console.log("Propiedad " + prop);
    console.log("Valor "+mundo[prop]);
}

//Contextos

console.log("");

var mascota = {
    animal: 'Perro', 
    raza: 'Ovejero Alemán',
    amistoso: true,
    duena: 'María Lopez',

    info: function (){
        console.log("Raza: "+this.raza);
    }
}

mascota.info();