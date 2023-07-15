function f(array){
    try{
        if(!Array.isArray(array)){
            throw new Error("Error: parameter type should be an array");
        }
        if(array.length == 0){
            throw new Error("Error: parameter can't be empty")
        }

        let allNumbers = true;
        //first time check second time print
        for(let i of array){
            if(typeof i != "number"){
                allNumbers = false;
                throw new Error("Passed array can only contain numbers");   
            }
        }
        if(allNumbers){
            for(let i of array){
                console.log(i);
            }
        }
            
    }catch(error){
        console.log(error.message);
    }
}
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f("Content"); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty
f(["🧛🏼", "👨🏽‍🔧",5, "dogs"]); // Error: parameter type should be array of numbers
f([1, 2, 3,"4d",6]); // Error: parameter type should be array of numbers