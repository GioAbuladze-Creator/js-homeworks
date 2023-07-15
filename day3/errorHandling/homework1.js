const value = 100;
const nearLimit = 90;
const limit = 100;

try{
    if(value > nearLimit){
        console.warn('Warning: value is greater than nearLimit.');
    }

    if(value > limit){
        throw new Error('Error: value is greater than the limit.');
    }

}catch(error){
    console.log(error.message);
}