// A function that does one or both:
//- Takes one or multiple functions as arguments
//- Returns a function.

function multipleGreet(func, count){ // higher order funtion
    for (let i = 1; i <= count; i++){
    func();
    }
}

let greet = function(){
    console.log("hello abhay");
}

multipleGreet(greet, 19)