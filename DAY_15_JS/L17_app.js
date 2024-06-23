let color = "green"

switch(color){
    case "red":
        console.log("stop");
        break
    case "yellow":
        console.log("go slow");
        break;
    case "green":
        console.log("Go fast");
        break;  
    default:
        console.log("light is broken")                  
}

console.log("out of code");