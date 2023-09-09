var devUsuario = function(){
    return "Camilo";
}

var devSaludo = function(){
    return "Hola";
}

function saludar (func1, func2){
    return func1() +" "+ func2();
}

console.log(saludar(devSaludo, devUsuario));

var devFrace = function(comida){
    return "Hoy quiero comer "+comida;
}

var hablar = function(comida, func){
    return func(comida);
}

var fraseFinal = hablar("Pizza", devFrace);
console.log(fraseFinal);