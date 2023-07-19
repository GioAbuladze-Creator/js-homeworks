function rotate(target,count,direction="right"){
    try{

        if(Array.isArray(arr)){
            if(typeof count == "number"){
                if(typeof direction=="string"){
                    for(let i=0;i<count;i++){
                        if(direction=="right"){
                            //take last and add as a first one
                            arr.unshift(arr.pop());
                        }else if(direction=="left"){
                            // take first and add as a last one
                            arr.push(arr.shift());
                        }
                    }
                    console.log(arr);
                }else{
                    throw new Error("Error: Third parameter optional and has to be only string")
                }
            }else{
                throw new Error("Error: Second parameter required and has to be number");
            }
        }else{
            throw new Error("Error: First parameter required and has to be only array");
        }
    }catch(error){
        console.log(error.message);
    } 
}
const arr = [1,2,3];
//rotating changes array so keep only one instance a time

rotate(arr, 1, 'left');  // result: [2,3,1]
rotate(arr, 1);  // result: [3,1,2]
rotate(arr, 2);  // result: [2,3,1]
rotate(2) //Error: First parameter required and has to be only array
rotate(arr, "s"); //Error: second parameter required and has to be number
rotate(arr,2,5)
