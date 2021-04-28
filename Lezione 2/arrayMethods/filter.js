

let numeri = [1, 2, 5, 8, 12, 24, 54];

/*
la proprietà length degli array, ci restituisce 
il numero di elementi che troviamo al suo interno 
*/
// console.log(numeri.length);



// filter
/* 
il metodo filter ci permette di filtrare gli elementi dell'array,
esso ritorna un nuovo array, solo con gli elementi che matchano
con la regola di filtraggio applicata all'interno della funzione
passata come argomento (funzione di callback)
*/
let numeriMinoriDi10 = numeri.filter(
    function(el) {


        /* 
        invece di usare if ed else
        ritorniamo direttamente il valore
        dell'espression el < 10
        che ritorna un boolean true o false
        */
        return el < 10;

        /* 
        se la condizione di filtraggio è true,
        allora ritorniamo true e l'elemento nell'iterazione
        che è stato appena valutato verrà inserito nel nuovo
        array
        */
        // if (el < 10) {
        //     return true;
        // } else {
        //     /*
        //     altrimenti ritorniamo false,
        //     quindi l'elemento verrà scartato
        //     */
        //     return false
        // }
    }
)

console.log(numeriMinoriDi10);