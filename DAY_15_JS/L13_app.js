// nested if-else
// nesting is writing if-else inside if-else statements. it can have many levels

let marks = 80;

if (marks >= 33){
    console.log("Pass");
    if (marks >= 80){
        console.log("Grade : O 'Outstang'")
    }else {
        console.log("Grade is A")
    }
}else{
    console.log("Better Luck next Time !")
}