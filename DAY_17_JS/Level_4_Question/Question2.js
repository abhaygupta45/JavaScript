// Write a JS program to find the no. of digits in a Number.
// example: if number = 287152, count =6

let number = 2345656;
let count = 0;

let copy = number;

while (copy > 0){
    count++;
    copy = Math.floor(copy/10);
}

console.log(count);