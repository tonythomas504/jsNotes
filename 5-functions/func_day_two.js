// Make a function called greet
function greet() {
    console.log("Hello");
}

// say hi
let say_hi = () => console.log("Hi");

//hello 

let hello = () => {
    console.log("Hello");
}

// greet_two
let greetTwo = function() {
    console.log('Yo yo yo');
}

aList = ['Tony', 'Thomas']

function printList(){
    console.log(aList);
}
printList()
function betterPrint(list_param){
    console.log(list_param);
}
betterPrint(aList)

function varLoop(n){
    for(let i = 0; i <= n; i++) {
        console.log(i);
    }
}
// n = counting from 1-30
varLoop(30)

/*  function varLoop(n) {
    for(let i = 0; i <= 30; i++)
}

function print_name(name){
    console.log(name);
}
// name = "Justin"
print_name("Justin")
/*
function print_name("Justin"){
    console.log("Justin")
}
*/
// name = "Adam"
print_name("Adam")

//Make a function that takes in 3 things and prints them on separte lines
function multiPrint(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
//Passing in a list of things
function listPrint(wordList){
    // for (word in wordList){
    //     console.log(wordList[word]);
    // }

    for (word of wordList){
        console.log(word);
    }
}
listPrint(['Justin', 'Adam', 'Amy', 'Joe'])

//For in loop is best for indexing 
//For of is best for values


