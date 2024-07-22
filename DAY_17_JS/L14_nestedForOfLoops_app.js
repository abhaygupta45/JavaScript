console.log("nested for of loop");


// nested for of loop

let heroes = [["superman", "batman", "wonder woman",],["spiderman", "ironman", "thor",]];

for(list of heroes){
    for(name of list){
        console.log(name);
    }
}