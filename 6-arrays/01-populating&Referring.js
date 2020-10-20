let list = ['chips', 'apples', 'coffee', 'tea'];

console.log(list[1]);
console.log(list[2]);

let students = ['Ro', 'Travis', 'Taylor', 'Justin', 23, true, ['Isaiah', 'Jason', 'Adam']]

// console.log(typeof students);
// console.log(students instanceof Array); // * instanceof Array gives you a boolean back. You can test if you are getting an array back

// dive into the nested array and pull the value 'Jason'
// - print out "Hello Jason!



console.log(students[6][1]);
let student = students[6][1];
console.log(`Hello ${student}`);