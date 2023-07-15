function getDivisors(num) {
    try{
        if(typeof num !== "number"){
            throw new Error("parameter type is not a Number");
        }
        if(num===0){
            throw new Error("parameter can't be a 0");
        }else if(num>0){
            let divisors = [];
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    divisors.push(i);
                }
            }
            console.log(divisors);
        }
    }catch(error){
        console.log(error.message);
    }
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors("Content"); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

