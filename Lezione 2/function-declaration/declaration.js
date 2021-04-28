// esecuzione della function declaration
test();

let nome = 'ryan';
const cognome = 'burgos';

/* 
function declaration gode dell'hoisting,
quindi nonostante la dichiarazione della funzione
avvenga alla fine dello script, noi possiamo comunque eseguirla
prima della sua dichiarazione
*/
function test() {
    console.log('hello world');
}