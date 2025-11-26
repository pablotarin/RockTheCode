/* Calcular promedio de strings: Crea una función que reciba por parámetro 
un array y cuando es un valor number lo sume y de lo contrario cuente la 
longitud del string y lo sume. Puedes usar este array para probar tu función:

pista (typeof) */
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    if(!Array.isArray(param)){
        return "No es un array";
    } else if (param.length == 0){
        return null;
    }

    let sum = 0;
    for (let i = 0; i < param.length; i++){
        if(typeof param[i] == "number" && !Number.isNaN(param[i])){
            sum += param[i];
        } else if (typeof param[i] == "string"){
            sum += param[i].length;
        }
    }

    return sum/param.length;
}

console.log(averageWord(mixedElements));