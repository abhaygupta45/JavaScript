// Guessing Game 

// User enters a max number and then tries to guess a rando{m number generated number between 1 to max.

const max = prompt("Enter the max Number:");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("Guess the number");

while(true){
    if (guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!!! random number was ", random);
        break;
    }else if (guess < random){
        guess = prompt("hint : Your guess was to small........ please try again");
    }else {
        guess = prompt ("hint : ypur guess was to large....... please try again");
    }
}

 