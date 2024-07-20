let fruits = ["mango", "apple","banana", "litchi","orange"];

for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

console.log("for odd numbers of fruits")
for(let i=1; i<fruits.length; i+=2){
    console.log(i, fruits[i]);
}


console.log("for even numbers of fruits")
for(let i=0; i<fruits.length; i+=2){
    console.log(i, fruits[i]);
}


console.log("for reverse numbers of fruits")
for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}