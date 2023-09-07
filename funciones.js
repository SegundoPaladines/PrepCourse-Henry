function sumarTres(x){
    console.log("Primera "+(x+3));
}

sumarTres(5);

//Forma clásica
function sumarTresClasica(x){
    return x + 3;
}

console.log("Clasica "+sumarTresClasica(4));

//Guardar funcion dentro de una variable
var sumaTres = function(x) {
    return x + 3;
}

console.log("Dentro variable "+sumaTres(4));

//Funcion Lamda
var sumTres = (x) => {
    return x + 3;
};

console.log("Flecha "+sumTres(7));

//cuidado con los console log
function cuidadoConConsoleLogv(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion(){
    return (
        "El nombre retornado por la funcio 'cuidadoConConsoleLogv' es:"+
        cuidadoConConsoleLogv("Juan")
    );
}

console.log(otraFuncion());

function otraOtraFuncion(nombre){
    return nombre;
    console.log(nombre);
}

console.log(otraOtraFuncion("Pedro"));