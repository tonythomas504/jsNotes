//? forIn loops give you the ability to find the values inside of an object
let student = {
    name: "Tony",
    awesome: false,
    degree: "Javascript",
    week: 1
}

// for (item in student) {
//     //console.log(item);
//     console.log(student[item]);


// let cats = ['tabby', 'british shorthair', 'burmese']

// for (cat in cats) {
//     console.log(cat);
//     console.log(cats[cat]);
// }

/*
Challenge
*********
Write a for in loop tht capitalize the first letter of a name and lowercases the rest of the name
*/

let names = 'toNY';
let capName;
for (let i in names) {
    if (i == 0) {
        capName = names[i].toUpperCase();
    } else {
        capName += names[i].toLowerCase();
    }
}

console.log(capName);