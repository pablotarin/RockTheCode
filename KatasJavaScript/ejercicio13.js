const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  if (nameFinder.includes(param)){
    return [true, nameFinder.indexOf(param)];
  } 
  return false;
}

console.log(finderName("Clint"));