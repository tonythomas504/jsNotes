
//* Constructor functions are a way of building things that are the same but take in different values
//? Person.name = name
function Person(name, age, canVote) {
    //* this.something is available when you do dot notation 
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

console.log(typeof Person);

//* every time you create one use the keyword new
let person4 = new Person('Justin', 80, true);
let person5 = new Person('Amy', 54, true)
console.log(person4.name);
console.log(person5.name);

person4['name'] = 'Adam'
console.log(person4.name);
