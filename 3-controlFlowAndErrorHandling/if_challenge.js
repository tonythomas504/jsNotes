//  ? CHALLENGE
/*
    ?  Bronze:
    ? Write an if else statement that checks your name;
    ? If it is your name, console log '<name>'
    ? If the name does not match, console.log 'Hello, what is your name?'
    ? Silver:
    ? If It is your name, console log 'Hello, my name is <name>'
    ? Gold:
    ? If it is not your name, console log 'Hello, is your name <name here> ?'
*/

// let myName = 'Tony Thomas';
// let name = 'Anthony Thoma';


// if (myName == 'Tony Thomas') {
//     console.log(myName);
// } else {
//     console.log('Hello what is your name');
// }; 

// if (name == 'Tony Thomas') {
//     console.log('Hello my name is ' + myName);
// } else {
//     console.log('Hello is your name ' + myName + '?');
// };

/* CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = 'zAchARy'


//Bronze
// if (name == name.toUpperCase(0)) {
//     console.log(name);
// } else {
//     console.log('Hey this is not written correct');
// }

//Silver
// if (name == name.toUpperCase(0)) {
//     console.log(name.chArt(0));
// } else {
//     console.log(name.substr(1,6));
// }


//Gold
// if (name == name.toUpperCase(0)) {
//     console.log(name.toLowerCase());
// } else {
//     console.log(name.toUpperCase(0),name.toLowerCase(1,2,3,4,5,6));
// }

//Easier Way Bronze

// if (name[0] == name[0].toUpperCase()) {
//     console.log(name);
// } else {
//     console.log("Hey this name isn't written correctly");
// }

//Easier Way Silver

// if (name[0]== name[0].toUpperCase()) {
//     console.log(name[0]);
// } else {
//     console.log(name.slice(1).toLowerCase());

//Easier Way Gold

// if (name[0] == name[0].toUpperCase) {
//     let isUppercase = name[0] + name.slic(1).toLowerCase();
//     console.log('console log # 1:', isUppercase);
// } else {
//     let notUppercase = name.charAt(0).toUpperCase +name.slice(1).toLowerCase();
//     console.log('console log #2:', notUppercase);
// }