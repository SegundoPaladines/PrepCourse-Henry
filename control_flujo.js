function viajar(destino){
    if(destino === "Brazil"){
        console.log("Gire a la izquierda");
    }else if(destino === "Argentina"){
        console.log("Gire a la derecha");
    }else{
        console.log("Nos perdimos");
    }
}

viajar("Brazil1");

function puedeManejar(edad){
    if(edad >= 18){
        console.log(true);
    }else{
        console.log(false);
    }
}
puedeManejar(18);