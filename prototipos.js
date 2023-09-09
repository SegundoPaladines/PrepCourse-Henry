//Prototipo array <- sirve para agregar metodos a una clase que ya existe ?
Array.prototype.mayTres = function (){
    var arregloModificado = [];
    for(i = 0; i < this.length; i++){
        if(this[i] > 3){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
}

var arreglo = [1, 2, 3, 4, 5, 6];
var nuevo_arreglo = arreglo.mayTres();

console.log(nuevo_arreglo);

//Ejemplo de rpototipo con clase local
class latinoAmerica{
    constructor(){
        this.paises = [];
    }
}

latinoAmerica.prototype.addPais = function (pais){
    this.paises.push(pais);
}

var continente = new latinoAmerica();
console.log(continente);
continente.addPais("rusia");
console.log(continente);