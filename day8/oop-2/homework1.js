Function.prototype.delay = function (ms) {
    return (...args)=>{
        setTimeout(()=>this(...args),ms)
    }

    // Way 2:
    
    // return function(...args){
    //     setTimeout(()=>this(...args),ms)
    // }.bind(this)   
    
}

function f() {
    console.log('hello');
}
f.delay(1000)(); // print "hello" after 1 second

// or with parameters:
function f2(a, b) {
    console.log(a + b);
}
f2.delay(1000)(1, 2); // print 3 after 1 second