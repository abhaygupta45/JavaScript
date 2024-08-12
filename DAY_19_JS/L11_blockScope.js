// Block Scope :- Variables declared insidde a {} block cannot be accessed from outside the block.

let age = 21;
if (age >= 18){
    let str = "adult";
    console.log(str);
}

console.log(str)// error inn this line because of block scope