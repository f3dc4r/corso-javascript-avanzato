
function addizione(arg1, arg2) {

}


/*
- tramite la sintassi ...numeri posso passare un numero indefinito di argomenti
alla funzione,
- la variabile numeri prenderà il valore di un array che contiene effettivamente tutti gli
argomenti passati alla funzione
*/
function sommaNumeri(...numeri) {

    
    /* 
    abbiamo dichiarato una variabile di appoggio di nome risultato 
    che conterrà alla fine del ciclo, la somma degli argomenti di tipo number
    */
    let risulato = 0;
    /* 
    il for..of non fa altro che ciclare l'array 
    contente gli argomenti passati alla funzione 
    */
    for (let arg of numeri) {
        /* 
        in questo blocco if, stiamo controllando con typeof, 
        se l'argomento in questione, nell'iterazione, è effettivamente
        di tipo number
        */
        if (typeof arg == 'number') {
            /*
            qui stiamo sommando a risultato l'argomento di tipo number e stiamo 
            riassegnando il valore della somma alla variabile risultato,
            è l'equivalente di questa sintassi ---> risulato = risulato + arg;
            */
            risulato += arg;
        } else {
            /*
            nel blocco else stampiamo nella console del browser un messaggio di avviso
            utilizzando il carattere speciale backtick (ALT + 96) `` in modo da poter usare
            la sintassi ${ espressione javascript } in modo da evitare fastidiose concatenazioni
            di stringhe
            */
            console.log(`${arg} questo elemento non è un numero`)
            console.log(arg + ' questo elemento non è un numero')
        }
    }
    /* logga sulla console del browser la variabile risultato */
    console.log(risulato);
}

// esecuzione della funzione
sommaNumeri(1, 'ciao', {test: 'test'}, 25, 43);