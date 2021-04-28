 /*
/ divisione
* moltiplicazione 
+ addizione
- sottrazione
% modulo
*/


let numeri = [1, 2, 5, 8, 12, 24, 54];

// map

/*
il metodo map degli array ci permette di manipolare/modificare
i singoli elementi dell'array su cui lo stiamo eseguendo,
tramite la callback function che gli passiamo come argomento
*/
let quadratoDeiNumeri = numeri.map(
    function(elemento){
        /* in questo caso map ritornerà 
        un nuovo array, con il quadrato dei numeri */
        return elemento*elemento;
    }
)


console.log(quadratoDeiNumeri)


let parole = ['ciao', 'buongiorno', 'buonasera'];


let paroleMaiuscole = parole.map(
    function(par) {
    /* 
    in questo caso map ritorna un nuovo array con le parole,
    che hanno tutti i caratteri in maiuscolo
    */
       return par.toUpperCase(); 
    }
)
console.log(parole)
console.log(paroleMaiuscole);