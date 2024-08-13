// A variable defined outside a function can be accessible inside another function defined after the variable declaration.
// The opposite is not true

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}