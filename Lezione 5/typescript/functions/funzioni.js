var miaVar;
function addizione(a, b) {
    return a + b;
}
function concatena(a, b) {
    return a + b;
}
miaVar = concatena('ciao a tutti', ' questo è il corso di js avanzato');
console.log(miaVar);
// senza tipizzare i nostri argomenti
// e il valore di ritorno
// andiamo facilmente incontro ad errori
function somma(a, b) {
    return a + b;
}
// console.log(somma(1, '10'));
// void rappresenta l'assenza di un ritorno di un valore
// da parte della funzione
function test() {
    console.log('hello world');
}
// tipizzazione applicata su una arrow function
var differenza = function (a, b) { return a - b; };
var diff = differenza(10, 5);
// console.log(diff);
