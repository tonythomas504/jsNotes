let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog']

food.push('Pizza');
console.log('push', food);

food.splice(1, 1, 'Bananas')
console.log(food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);
//  .splice(position, how many to delete, what to add in it's place)
food.splice(0, 3, 'Turkey')
console.log(food);

food.pop();
console.log(food);

food.shift();
console.log(food);

food.unshift('Apple pie', 'Fried Chicken')
console.log(food);

let dogs = ['Labradoodle', 'Goldendoodle', 'Bernedoodle', 'Aussie doogle']

// for(let i = 0; i < dogs.length; i++) {
//     console.log(dogs[i]);
// }

//* forEach()

// dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog);
})

dogs.forEach((dog, index) => {
    console.log(dog);
    console.log(index);
})

let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array) {
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num))
} else {
    console.log('not an array');
}