const r = require('readline-sync');

// média com while 

let somaDoWhile =0;
let contadorDoWhile = 1;

do {
    let nota = parseFloat(r.question(`nota ${contadorDoWhile}: `));
    somaDoWhile += nota;
    contadorDoWhile++;

} while (contadorDoWhile <= 5);

let mediaDoWhile= somaDoWhile / 5;
console.log("A média é:  " + mediaDoWhile.toFixed(2));
