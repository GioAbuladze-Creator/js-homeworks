function genericFunction(func){
    try{
        func();
    }catch(error){
        console.log(error.message);
    }
}

function sayHello(){
    console.log('hello');
}

genericFunction(sayHello);

function addOne(){
    const a = 2;
    a++;
    console.log(a)
}

genericFunction(addOne);