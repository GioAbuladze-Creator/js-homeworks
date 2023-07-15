const n=1000;
let number=n;
let numb=0;

while(number/2>50){
    number/=2;
    numb++;
}

console.log(`Result: ${number}`);
console.log(`iteration count: ${numb}`);