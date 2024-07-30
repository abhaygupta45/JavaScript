// Add/ Update CSSMathValue
// 1. change the city to "mumbai"
// 2. Add a new porperty, gender : "male"
// 3. change the marks to "A"

const student = {
    name : "abhay",
    age : 20,
    marks : 94.3,
    city : "Delhi"
};

console.log(student);

console.log("change the city to mumbai");

console.log(student.city = "mumbai");
console.log(student);

console.log("Add new propery gender = male");

student.gender = "male";
console.log(student);


student.marks = "A";

console.log(student);
