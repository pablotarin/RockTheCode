/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar 
cada uno de los elementos. Implementa la función denominada sumAll que toma
un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función: */
const numbers = [1, 2, 3, NaN, 45, 37, 58];

function sumAll(param) {
    if(!Array.isArray(param)){
        return "No es un array";
    } else if (param.length == 0){
        return null;
    }

    let sum = 0;
    for (let i = 0; i < param.length; i++){
        if(typeof param[i] != "number" || Number.isNaN(param[i])){
            return "Hay elementos que no se pueden sumar.";
        }
        sum += param[i];
    }

    return sum;
}

console.log(sumAll(numbers));