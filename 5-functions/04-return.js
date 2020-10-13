let name = fName => {
    return 'Dexter'
}
let myName = name();
console.log(myName);

function capitalizeName(name) {
    let capName = '';
    for (l in name) {
        console.log(l);
        if (l == 0) {
            capName += name [l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    return capName
}

console.log(capitalizeName('tONYDdfakdjri'));

