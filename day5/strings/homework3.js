
function searchWord(target,find){
    try{
        if(typeof target!='string' || typeof find!='string'){
            throw new Error("Parameters should be strings");
        }
        let count=0;
        for(let i=0;i<target.length;i++){
            if (target.substring(i,i+find.length)==find){
                count++;
            }
        }
        console.log(`${find} was found ${count} times.`)
    }catch(error){
        console.log(error.message);
    }
}
searchWord("The quick brown fox", "fox"); // "'fox' was found 1 times."
searchWord("aa, bb, cc, dd, aa", "aa"); // "'aa' was found 2 times."
searchWord("sunshine", "sun"); // "'sun' was found 1 times."