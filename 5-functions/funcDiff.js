// * Hoisting allows the function to be declared before the function is typed, IF function is used as the keyword

// * Differnces 
// * You cannot use an arrow fucntion before it is declared
let arrFunc = () => {
    console.log('This is a fat arrow function');
}
// * A function with function as the keyword can be declared first
function stdFunc() {
    console.log('This a standard function');
}


//File Layout

//import area

//delcaring all words you need to know: functions, constants
//calling the functions