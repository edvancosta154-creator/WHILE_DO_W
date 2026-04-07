const r = require('readline-sync');


// variaveis
let soma = 0;
let contador = 0;

//contador para controlar o numero de notas
while (contador <= 5) { 
    // solicita a nota do usuário
    let nota = perseFloat(r.question(`Nota ${contador}: `));
//realizar o calculo das notas, 4 notas.
soma += nota;
// incrementa o contador para a proxima nota
contador++;
}
// define a media a soma das notas dividido por 4 obter a média.
let media = soma / 5;
// printar a media e usa toFixed para limitar a 2 casas decimais.
console.log(`A média é: ${media.toFixed(2)}`);
