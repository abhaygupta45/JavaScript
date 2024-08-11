// What is Scope?

// Scope determines the accessibiliy of vaiables, objects and functions from different parts of the code.

// Function
// Block 
// Lexical

// function scope - Variables defined inside a function are not accessible (visible) from outside the function.

let sum = 54 ; // global scope

function calSum(a,b){
    let sum = a + b; // function scope
    console.log(sum);
} 

calSum(1,2);
console.log(sum);
