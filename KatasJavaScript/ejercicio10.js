/* Calcular un promedio (media) es una tarea extremadamente común.
Puedes usar este array para probar tu función: */
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
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

    return sum/param.length;
}

console.log(average(numbers));