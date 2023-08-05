class Validator {
    #checkString(str){
        if(typeof str !== 'string'){
            throw new Error(`Error: ${str} is not a string type`);
        }
    }
    isEmail(email){
        this.#checkString(email);
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email);
    }
    isDomain(domain){
        this.#checkString(domain);
        return /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(domain);
    }
    isDate(date){
        this.#checkString(date);
        return /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(date);
    }
    isPhone(phone){
        this.#checkString(phone);
        return /^\+995\s\([0-9]{3}\)\s[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(phone);
    }
}
let validator = new Validator();
console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+995 (596) 81-68-92')); // '+995 (000) 00-00-00'
console.log(validator.isPhone(599112233)) // error