// Array Methods

console.log("push method");

let cars = ['audi','xuv','maruti'];
console.log(cars);
cars.push('toyota');
console.log(cars);

console.log("pop method");
cars.pop();
console.log("after using pop method", cars);

console.log("unshift method for front of the array");
cars.unshift('farari');
console.log("after adding farari in first position of the array", cars);

console.log("shift method");
cars.shift();
console.log(cars);

let followers = ["a","b","c"];
let blocked = followers.shift();

console.log(followers)