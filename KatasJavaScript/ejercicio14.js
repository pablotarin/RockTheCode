const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
    let copy = param.slice();
    let counter = [];

    while(copy.length > 0){
        let sum = 0;
        let p = copy[0];
        while(copy.includes(p)){
            copy.splice(copy.indexOf(p),1);
            sum++;
        }
        
        counter.push([p, sum]);
    }
    
    return counter;
}

console.log(repeatCounter(counterWords));