// 1 Question.
// create a number varible

// let num = prompt("Enter number");

// if (num % 10 == 0){
//     console.log(num,"Number is divisible by 10.");
// }else{
//     console.log(num,"Number is not divisible by 10");
// }

// 2. Question 
// takes the user name and age as input using prompts

// let name = prompt("Enter Name");
// let age = prompt("Enter age");

// console.log(name,"is", age, "year old");

// alert(`${name} is ${age} years old.`);



// Write a switch statement to print the months in the quarter.

// let quarter = prompt("Enter 1 to 4");

// let quarter = 1;

// switch (quarter){
//     case 1 : console.log("january, febury, march");
//     break;
//     case 2 : console.log("april, may, june");
//     break;
//     case 3 : console.log("july, august, september");
//     break;
//     case 4 : console.log("october, november, december");
//     break;
// }

// Question Number 4

// let str = prompt("Enter any string");

// if((str[0] == "A" || str[0] == "a") && str.length >= 5){
//     console.log(str,"it is a golden string");
// }else{
//     console.log(str,"This is not a golden string")
// }


// let a = 4;
// let b = 5;
// let c = 2;

// if (a > b){
//     if(a > c){
//         console.log(a,"is the largest");
//     }else{
//         console.log(c,"is the largest");
//     }
// }else{
//     if(b > c){
//         console.log(b,"is the largest");
//     }else{
//         console.log(c,"is the largest");
//     }
// }

console.log("bonus question :-- Write a program to check if 2 numbers have same last digit. for example 32 and 47852");

let num1 = 32;
let num2 = 47852;

if ((num1 % 10) == (num2 % 10)){
  console.log("numberes have the same last digit which is ",num1%10);
}else {
  console.log("numbers don't have the same last digit");
}



// import React, { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your authentication logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginPage;
