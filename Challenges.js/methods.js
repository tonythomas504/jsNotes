/*
- (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
    */

let films = ['Lady Bird', 'Pulp Fiction', 'The Social Network', 'Get Out']


films.push('Whiplash')
console.log(films);


films.splice(1, 1, 'Grand Budapest Hotel')
console.log(films);

films.forEach(film => console.log(film))