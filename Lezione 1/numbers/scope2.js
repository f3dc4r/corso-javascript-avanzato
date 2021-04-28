// console.log(saluta)


// miaFunzione();

// y è una variabile dichiarata nello scope globale
var y = 'fuori';

function test() {
    /* 
    y senza var/let/const si riferisce alla variabile
    nello scope globale
    */
    y = 'dentro';
}

/**
all'esecuzione della funzione test
alla variabile y viene riassegnato un nuovo
valore
 */
test();

console.log(y); // dentro