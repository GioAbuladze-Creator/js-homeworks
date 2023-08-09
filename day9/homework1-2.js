class DB {
    #data;
    #checkKeys(obj) {
        let keys = ['name', 'age', 'country', 'salary']
        for (let key of Object.getOwnPropertyNames(obj)) {
            if (!keys.includes(key)) {
                throw new Error("Invalid object properties")
            }
        }
    }
    constructor() {
        this.#data = new Map();
    }
    create(obj) {
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null || Object.keys(obj) == 0) {
            throw new Error("Invalid Object")
        }
        if (!obj.name || typeof obj.name != 'string') {
            throw new Error("Invalid name")
        }
        if (!obj.age || typeof obj.age != 'number' || isNaN(obj.age)) {
            throw new Error("Invalid age")
        }
        if (!obj.country || typeof obj.country != 'string') {
            throw new Error("Invalid country")
        }
        if (!obj.salary || typeof obj.salary != 'number' || isNaN(obj.salary)) {
            throw new Error("Invalid salary")
        }
        // wrong keys
        this.#checkKeys(obj);

        // generate id and add to database
        let id = `u${this.#data.size + 1}`;
        this.#data.set(id, obj);

        // return id ---- key
        return id;
    }

    read(id) {
        if (!id && id != false) {
            // if(id===undefined) ---- wrong (user can pass undefined as an argument)
            // if (!id) ---- wrong (user can pass false and it is not a string) ---> wrong error
            // another solution:  if(arguments.length==0) 
            throw new Error("Please pass the id")
        }
        if (typeof id != 'string') {
            throw new Error("id must be a string")
        }
        if (!this.#data.has(id)) {
            return null
        } else {
            //we need to return object with id but not change original
            let objId = { ...this.#data.get(id) };
            objId['id'] = id;
            return objId;
        }
    }
    readAll() {
        if (arguments.length > 0) {
            throw new Error("Please do not pass the parameter")
        }
        return [...this.#data.values()]
    }
    update(id, obj) {
        if (!id || id == true) {
            throw new Error("Please pass the correct id")
        }
        if (typeof id != 'string') {
            throw new Error("id should be a string")
        }
        if (!this.#data.has(id)) {
            throw new Error("Please pass existing id")
        }
        if (!obj || obj == false) {
            throw new Error("Please pass the object")
        }
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null || Object.keys(obj) == 0) {
            throw new Error("Parameter should be a proper Object")
        }
        if (obj.hasOwnProperty('name') && typeof obj.name != 'string') {
            throw new Error("name should be a string")
        }
        if (obj.hasOwnProperty('age') && (typeof obj.age != 'number' || isNaN(obj.age))) {
            throw new Error("age should be a proper number")
        }
        if (obj.hasOwnProperty('country') && typeof obj.country != 'string') {
            throw new Error("country should be a string")
        }
        if (obj.hasOwnProperty('salary') && (typeof obj.salary != 'number' || isNaN(obj.salary))) {
            throw new Error("salary should be a proper number")
        }
        // exclude other properties than name, age, country, salary
        this.#checkKeys(obj);

        let updated = { ...this.#data.get(id), ...obj }
        this.#data.set(id, updated);
    }
    delete(id) {
        if (typeof id != 'string') {
            throw new Error("id should be string only")
        }
        if (!this.#data.has(id)) {
            throw new Error("Pass the correct id")
        }
        this.#data.delete(id)
    }
    find(obj) {
        if (arguments.length == 0) {
            throw new Error('Please pass the object')
        }
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null || Object.keys(obj) == 0) {
            throw new Error("Pass the proper Object to find()")
        }
        let filteredArr = new Set([...this.#data.values()]);

        for (let i of filteredArr) {
            if (obj.hasOwnProperty('name')) {
                if (typeof obj.name != 'string') {
                    throw new Error("name should be a string")
                }
                if (obj.name != i.name) {
                    filteredArr.delete(i)
                }
            }
            if (obj.hasOwnProperty('country')) {
                if (typeof obj.country != 'string') {
                    throw new Error("country should be a string")
                }
                if (obj.country != i.country) {
                    filteredArr.delete(i)
                }
            }
            if (obj.hasOwnProperty('age')) {
                if (typeof obj.age !== 'object' || Array.isArray(obj.age) || obj.age === null || Object.keys(obj.age) == 0) {
                    throw new Error("Invalid age")
                }
                if (obj.age.hasOwnProperty('min')) {
                    if (typeof obj.age.min != 'number' || isNaN(obj.age.min)) {
                        throw new Error('Invalid min age')
                    }
                    if (obj.age.min > i.age) {
                        filteredArr.delete(i)
                    }
                }
                if (obj.age.hasOwnProperty('max')) {
                    if (typeof obj.age.max != 'number' || isNaN(obj.age.max)) {
                        throw new Error('Invalid max age')
                    }
                    if (obj.age.max < i.age) {
                        filteredArr.delete(i)
                    }
                }

            }
            if (obj.hasOwnProperty('salary')) {
                if (typeof obj.salary !== 'object' || Array.isArray(obj.salary) || obj.salary === null || Object.keys(obj.salary) == 0) {
                    throw new Error("Invalid salary")
                }
                if (obj.salary.hasOwnProperty('min')) {
                    if (typeof obj.salary.min != 'number' || isNaN(obj.salary.min)) {
                        throw new Error('Invalid min salary')
                    }
                    if (obj.salary.min > i.salary) {
                        filteredArr.delete(i)
                    }
                }
                if (obj.salary.hasOwnProperty('max')) {
                    if (typeof obj.salary.max != 'number' || isNaN(obj.salary.max)) {
                        throw new Error('Invalid max salary')
                    }
                    if (obj.salary.max < i.salary) {
                        filteredArr.delete(i)
                    }
                }

            }

        }

        return [...filteredArr]

    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const person2 = {
    name: 'sashka', // required field with type string
    age: 25, // required field with type number
    country: 'ru', // required field with type string
    salary: 1200 // required field with type number
};
const person3 = {
    name: 'vaska', // required field with type string
    age: 29, // required field with type number
    country: 'ge', // required field with type string
    salary: 3500 // required field with type number
};

// adding users
const id = db.create(person);
const id2 = db.create(person2);
const id3 = db.create(person3);

// -------------Homework1--------------
// check id
console.log("id ---> " + id3) // u3

// read() 
const customer = db.read(id2);
console.log('User:')
console.log(customer) // user object width id
console.log(db.read('u4')) // null

// readAll()
console.log("Read All Users:")
console.log(db.readAll()) // array of user objects (error when passing argument)

//update
db.update(id2, {
    name: 'natka',
    salary: 2222,
    // Wrong: 'Wrong Key' // Error
});
// db.update(id3,{})
db.delete(id);
console.log('Updated u2 And Deleted u1:')
console.log(db.readAll())



// -------------Homework2--------------
const query = {
    country: 'ge',
    age: {
        max: 30
    },
    salary: {
        min: 100,
        max: 4000
    }
};

console.log('Found:')
const customers = db.find(query);
console.log(customers)