 /*Fizz Buzz Conditionals Challenge
- create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let fb = 15  // %

if ( fb % 3 === 0 & fb % 5 === 0) {
    console.log('Fizz Buzz');
} else if ((fb % 3 ) === 0) {
    console.log('Fizz');
} else if ( fb % 5 === 0) {
    console.log('Buzz');
}



let fb = 30

switch (true) {
case (fb % 5 === 0 && fb % 3 === 0):
        console.log("Fizz Buzz");
        break;
    case fb % 3 === 0:
        console.log("Fizz");
        break;
    case fb % 5 === 0:
        console.log("Buzz");
        break;
    default:
        console.log(fb);
        break;
}

let FB = 30;

(FB % 3 == 0) & (FB % 5 == 0) ? console.log('Fizz Buzz')
: (FB % 5 == 0) ? console.log('Buzz')
: (FB % 3 == 0) ? console.log('Fizz')
: console.log( "FB not divisible by 3 or 5")


