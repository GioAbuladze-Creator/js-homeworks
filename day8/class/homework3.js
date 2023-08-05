class User{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }
    getFullName(){
        return this.name+" "+this.surname;
    }
}
class Student extends User{
    constructor(name,surname,year){
        super(name,surname);
        if(typeof year!='number'){
            throw new Error("Year Should Be Number")
        }
        if(year<2018){
            throw new Error("Year Should Be More Than 2018")
        }
        this.year=year;
    }
    getCourse(){
        return new Date().getFullYear()-this.year;
    }

}
var student = new Student("John", "Smith", 2018);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2018
console.log(student.getCourse()) // 5
