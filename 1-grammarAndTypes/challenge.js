/*     Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with a space between variables).
*/

let firstName = 'Tony';
let lastName = 'Thomas';
let houseNumber =  505;
let street = ' Main Street';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46203
let comma
console.log(firstName + lastName + ', ' + houseNumber +  street + ', ' +  city + ', ' + state + ' '+ zipcode );


let sent = 'This sentence will be split into individual parts'

let array = sent.split(' ');
console.log(array);