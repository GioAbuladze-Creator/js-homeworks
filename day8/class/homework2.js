class MyString{
    #checkString(str){
        if(typeof str !== 'string'){
            throw new Error('Error: parameter is not a string type');
        }
    }
    reverse(str){
        this.#checkString(str);
        return str.split('').reverse().join('');
    }
    ucFirst(str){
        this.#checkString(str);
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){
        this.#checkString(str);
        let final='';
        for(let word of str.split(' ')){
            final += this.ucFirst(word)+" ";
        }
        return final;
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'
// console.log(str.ucWords(2)); // error