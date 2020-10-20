let my_callback = (f) => {
    f('Hello World')
}
my_callback(console.log)

//* Call backs work the same as console.log()
//* when you call it back you variable()

function demo(name) {
    return `My name ${name}`
}
let string_first_letter = demo('Justin')[0]
console.log(string_first_letter);