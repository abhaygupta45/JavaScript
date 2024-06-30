// 1. For the give strings:
// let msg = "help!";
// Trim it and convert it to upperCase

let msg = "help!";
console.log("normal msg");
console.log(msg);
console.log("after changes")
console.log(msg.trim().toUpperCase());


// 2.For the String -> let name = "ApnaCollege", predict the output for following;
// name.slice(4,9)
// name.indexOf("na");
// name.replace("Apna","Our");


let name = "ApnaCollege";
console.log(name.slice(4,9))
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));

// 3. Separate the "College" part in above string and replace "l" with "t" in it.

let college = "ApnaCollege";

console.log(college.slice(4).replace('l','t'));
