//* Newer way/concise way to write functions.

//* CONCISE BODY
let hi = () => console.log('hi');

hi();

//* BLOCK BODY
let hi = () => {
    console.log('hi');
}

//? CONCISE vs BLOCK
let apples = x => console.log(`There are ${x} apples.`);

apples(8);

let apples = x => {
    console.log(`There are ${x} apples.`);
}

apples(8);