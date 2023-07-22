
function reverseCase(sentence){
    try{
        if(typeof sentence !== 'string'){
            throw new Error('Please enter a valid string');
        }
        sentence = sentence.split('');
        for(let i in sentence){
            if(sentence[i] === sentence[i].toUpperCase()){
                sentence.splice(i, 1, sentence[i].toLowerCase());
            }else{
                sentence.splice(i, 1, sentence[i].toUpperCase());
            }
        }
        sentence = sentence.join('');
        
        console.log(sentence)
        
    }catch(error){
        console.log(error.message);
    }
}
reverseCase('Hello theRe') // expected: 'hELLO THErE'

reverseCase('BIG LETTERS') // expected: 'big letters'

reverseCase('sDfGBnmsBgjs') // expected: 'SdFgbNMSbGJS'

reverseCase('') // expected: ''

reverseCase(2) // expected: error