
let mix = (...args) => {
    let level = 0;
    let res;
    let obj={errors:[],value:0};
    for (let i in args) {
        try {
            let func = args[i];
            if (typeof func == "function") {
                    if (i == 0) {
                        res = func();
                    } else {
                        res = func(res);
                    }
                
            } else {
                throw new Error("Error: Each parameter has to be function");
            }
            level++;

        } catch (error) {
            obj.errors.push({
                name: error.name,
                message: error.message,
                stack:error.stack,
                level: level
            });
            
            level++;
        }
    }
    obj.value=res;
    console.log(obj)
}

mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}, (prev) => {
    return prev * 2;
}, (prev) => {
    throw new ReferenceError('Reference Error');
}, (prev) => {
    return prev + 15;
}, (prev) => {
    return prev / 7;
}, [1,2,3]);

//without errors 
mix(() => {
    return 10;
}, (prev) => {
    return prev + 3;
},  (prev) => {
    return prev / 4;
});

