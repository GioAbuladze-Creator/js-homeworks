let mix=(...args)=>{
    try{
        let res;
        for(let i in args){
            let func=args[i];
            if(typeof func =="function"){
                if(typeof func()=="number" && !isNaN(func(res))){      
                    if (i==0){
                        res=func();
                    }else{
                        res=func(res);
                    }
                }else{
                    throw new Error("Error: Each function has to return number")
                }
            }else{
                throw new Error("Error: Each parameter has to be function")
            }
           
        }
        console.log(res);               
                
    }catch(error){
        console.log(error.message)
    }
}

mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}, (prev) => {
    return prev + 6;
}, (prev) => {
    return prev - 4;
}, (prev) => {
    return prev / 2;
}, (prev) => {
    return prev * 7;
}) //14

mix(()=>{return 10}, (prev)=>null) //Error
mix(()=>{return 10}, "F") //Error

