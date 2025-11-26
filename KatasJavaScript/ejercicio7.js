//Completa la función que tomando dos números como argumento devuelva el más alto.
function getMaxNumber(numberOne , numberTwo) {
  if (numberOne > numberTwo){
    return numberOne;
  } else if (numberOne === numberTwo){
    return "Son iguales";
  } else {
    return numberTwo;
  }
}

console.log(getMaxNumber(8, 5));