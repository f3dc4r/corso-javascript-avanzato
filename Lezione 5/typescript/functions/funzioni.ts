let miaVar: string;

function addizione(a: number, b: number): number {
    return a+b;
}



function concatena(a: string, b: string): string {
    return a+b;
}


miaVar = concatena('ciao a tutti', ' questo è il corso di js avanzato');
console.log(miaVar);

// senza tipizzare i nostri argomenti
// e il valore di ritorno
// andiamo facilmente incontro ad errori
function somma(a, b) {
    return a+b;
}


// console.log(somma(1, '10'));


// void rappresenta l'assenza di un ritorno di un valore
// da parte della funzione
function test(): void {
    console.log('hello world');
}

// tipizzazione applicata su una arrow function
let differenza = (a: number, b: number): number => a-b;

let diff = differenza(10,5);
// console.log(diff);






