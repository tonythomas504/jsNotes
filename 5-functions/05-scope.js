let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;
function scope(){
    y = 33;
    console.log(y);
}

scope();
console.log(y);

//* VAR vs LET
//Var is scoped to the nearest function block
//Let is scoped to the nearest enclosing block

var x = 12;
function varTest(){
    var x = 33;
    if (1 == 1) {
        var x = 45
        console.log(x);
    }
    console.log(x);
}

varTest()
console.log(x);

let x = 12;
function letTest() {
    let x = 33
    if (1 == 1) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

letTest();
console.log(x);

let calc_tip = (bill, tip_prec) => {
    return bill + (bill * tip_prec)
}

let pay = (ccn, total_cost) => {
    console.log(`The CC ${ccn} payed: ${total_cost}`)
} 

let pay_bill = (ccn, bill, tip_prec) => {
    let total = calc_tip(bill, tip_prec)
    pay(ccn, total)
}

let credit_card = 345345345345

pay_bill(credit_card, 65, 0.35)
pay_bill(credit_card, 20, 0.20)


let my_loop = (n) => {
    for (let i = 0; i<=n; i++){
        console.log(i);
    }
}

my_loop();