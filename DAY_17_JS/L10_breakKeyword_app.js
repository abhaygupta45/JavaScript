// break keyword
// it is used to stop the execution of the program.

let i=1;
while (i<=5){
    if(i == 3){
        break;
    }
    
    console.log(i);
    i++;
}

console.log("we used break at 3.")



console.log("guess the favourite movie game using break keyword")
const favMovie = "shiddat";

let guess = prompt("Guess my favorite movie ?");

while(guess != favMovie) {
    if(guess == "quit"){
        console.log("you quit the game");
        break;
    }
    guess = prompt("wrong guess.. please try again");
}

if (guess == favMovie){
    console.log("congrats !! ");
}