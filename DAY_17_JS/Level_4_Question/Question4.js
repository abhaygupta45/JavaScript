// Print the factorial of a number n.


let n = prompt("Enter any number ");

let factorial = 1;

for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);