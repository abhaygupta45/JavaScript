// truthy & falsy

// Everything in JS is true or False (in boolean context).
// This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.

// falsy values
// false, 0, -0, On(BigInt value), ""(empty string), null, undefined, NaN

// truthy values
// Everything else

if (0){
    console.log("it has true value");
}else {
    console.log("it has false value");
}


// empty string code

let string = "";

if (string){
    console.log("String is not empty");
}else {
    console.log("string is empty");
}