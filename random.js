


function checkProbabilityTheory(count){
    let rnd;  
    let even = 0;
    let odd = 0;
    for (let i = 0; i < count; i++) {
     rnd = Math.floor(Math.random() * (1000 - 100 + 1) ) + 100;
     //console.log(rnd);

     if (rnd % 2 === 0) {
        even++; 
      } else {
        odd++;
      }
    
    } 
console.log(count);
console.log(even);
console.log(odd);
const percentage = even / odd * 100;
console.log(percentage);

}
  
checkProbabilityTheory(15)




