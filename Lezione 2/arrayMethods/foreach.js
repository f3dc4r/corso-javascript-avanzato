let numeri = [1, 2, 5, 8, 12, 24, 54];

// forEach

/*
il metodo forEach non ritorna nessun valore,
ma ci permette comunque di ciclare su tutti gli elementi 
dell'array e agire su di essi, tramite la funzione di callback
che gli stiamo passando come argomento
*/
numeri.forEach(
    function(elemento) {
        console.log(elemento);
    }
)