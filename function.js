// 5.Functions

//Function Declaration :Add
function add(a,b){
    return a+b;
}
console.log(add(10,15));

//Function Expression : Square
const square = function(x){
    return x*x;
}
console.log(square(6));

// Array Function
const greet = (name) => {
    return 'Hello, ${name}!' ;
}
console.log(greet("Anjali"));
