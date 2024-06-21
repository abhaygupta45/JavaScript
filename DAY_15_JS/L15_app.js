// practice question
// A "good string" is a string that starts with the letter "a" & has a length > 3. Write a program to find if a string is good or Notification.

// In this situation we use logical and &&

console.log("check string is good or not")

let str = "apple"

if ((str[0]  === "a")&& (str.length > 3)) {
    console.log("Good string!");
}else{
    console.log("Not a good string");
}


// code 2, predict the output of following code.

let num = 12;

if ((num%3 === 0 )&& ((num+1 ===15) || (num-1 === 11))){
    console.log("safe");
}else {
    console.log("unsafe");
}