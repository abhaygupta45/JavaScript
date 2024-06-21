// Logical Operators

// logical Operators to combine expressions.

// && logiacal AND
// (exp1) && (exp2)
// true

let marks = 90;
 
if (marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");

}


// logical OR (||)
// (exp1) || (exp2)

let mark = 75;

if ((mark > 33 && mark <= 80 ) || !false){
    console.log("pass"); //pass
}

// Logical NOT (!)
// reverse the answer
// !(exp1)
// > !true
// <. false
// > !false
// <. true

console.log("logical NOT")
let marks1 = 73;

if (!(marks < 33)){
    console.log("Pass");
}


let marks3 = 75;

if ((marks3 > 33 && marks3 <= 80) || !false){
    console.log("Pappu paas ho gya")
}else {
    console.log("pappu fail");
}
