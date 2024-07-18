// program of guess my favorite movie name?

const favMovie = "shiddat";

let guess = prompt("Guess my favorite movie ?");

while( (guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess.. please try again");
}

if (guess == favMovie){
    console.log("congrats !! ");
}else {
    console.log("You quit");
}