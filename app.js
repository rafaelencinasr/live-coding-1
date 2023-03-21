// Escribe tu código aquí.

// FUncion que regrese un arreglo de strings con los elementos de otro arreglo que sean
// mas largos que un string de entrada

const stringComparacion = "azul";
const palabrasParaComparar = ["Amarillo", "Verde", "Rojo","Morado", "Negro", "Blanco", "Gris"];

function comparadorDeStrings(stringBase, arregloDeEntradas){
    //console.log(stringBase);
    //console.log(arregloDeEntradas);

    // For para recorrer el arreglo con su .length
        // comparar longitud de las cadenas:
        // si array[i].length> stringbase => se guarda el valor en un arrayAcumulado

    // return el arrayAcumulado
    let arregloAcumulado = [];
    // For para recorrer la longitud del arreglo
    for(let i=0; i<arregloDeEntradas.length; i++){

        //Comparamos si la longitud del arreglo es mayor que el de stringBase
        if(arregloDeEntradas[i].length>stringBase.length){

            //console.log(arregloDeEntradas[i] + " si es mas largo")
            
           arregloAcumulado.push(arregloDeEntradas[i]);
        } // fin del if
        else{
            //console.log(arregloDeEntradas[i] + " no es mas largo")
        }
    } // fin del for
    
    return arregloAcumulado;
}// fin de la funcion

// Se invoca la funcion y se guarda en una variable
let arregloResultado = comparadorDeStrings(stringComparacion,palabrasParaComparar);

// Funcion para crear los elementos en HTML
function crearElementosEnDOM(arregloDeEntrada){
    const ubicacion = document.querySelector("#ubicacion");
    ubicacion.innerHTML += `<li>String base de comparacion: ${stringComparacion}. Length: ${stringComparacion.length}<\li>`;
    for(let i = 0; i < arregloDeEntrada.length ; i++){
        ubicacion.innerHTML += `<li>${arregloDeEntrada[i]}<\li>`;
    }
    
}

crearElementosEnDOM(arregloResultado);
