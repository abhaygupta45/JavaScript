console.log("Create a function to roll a dice and always display the value of the dice (1 to 6)");

function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();