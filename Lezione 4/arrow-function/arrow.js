
// arrow function
// sono sempre anonime e per poterle richiamare successivamente
// dobbiamo necessariamente assegnarle a una variabile o costante
let somma = (a, b) => {
    return a + b;
}


let risultato = somma(2,4)

// console.log(risultato);

let addizione = function(a, b) {
    return a+b;
}



// solo quando abbiamo una sola istruzione possiamo scrivere l'arrow function su un riga sola
// scrivendo una arrow function su una riga, omettendo le parentesi graffe
// abbiamo un return implicito
let sottrazione = (a, b) => a-b;

let differenza = (a, b) => {
                    let risultato = a-b;
                    return risultato;
                }

let res = sottrazione(10,2);

// console.log('risultato sottrazione', res)


// quando ho solo un argomento nella funzione, posso omettere le parentesi tonde
let quadrato = a => a*a; // anche qui abbiamo un return implicito


let quadratoDiDodici = quadrato(12);

// console.log(quadratoDiDodici);