var singoloApice = 'ciao a tutti';
/* 
toUpperCase è un metodo con cui otteniamo
i caratteri maiuscoli della stringa su cui
lo stiamo eseguendo
*/
// console.log(singoloApice.toUpperCase())


var maiuscole = 'CIAO, 111, CIAO';

let parole = maiuscole.split('');
console.log(parole)



/* 
toLowerCase è un metodo con cui otteniamo
i caratteri minuscoli della stringa su cui
lo stiamo eseguendo
*/
console.log(maiuscole.toLowerCase());

var minuscole = maiuscole.toLowerCase()

console.log(minuscole);


var doppioApice = "benvenuti al \n corso di js oop"

var concatenazione = singoloApice + ' ' + doppioApice

var backtick = `${singoloApice} ${doppioApice}`

// console.log(backtick);

var nome = 'Ryan';
var eta = 24;

var numeri = [24, 25, 26]

var fraseVecchia = 'ciao a tutti sono ' + nome + ' e ho ' + eta + ' anni';

var frase = `ciao a tutti sono ${nome} e ho ${numeri[2]} anni`








