

/*
la funzione di callback, è una funziona passata come argomento
ad un'altra funzione
*/
function addizione(a, b, callback) {
    // sto assegnando a somma, la somma degli argomenti a e b
    let somma = a + b;
    // sto passando la variabile somma alla funzione di callback e la sto eseguendo
    callback(somma);
}

// esecuzione della funzione addizione
addizione(2, 4, function(pippo) {
    /* 
    all'interno della funzione di callback 
    stiamo andando a gestire la somma passata in input
    dalla funzione addizione, 
    risulato dell'istruzione
    let somma = a + b;
    */
    console.log(pippo); // 6
})


addizione(5, 6, function(paperino) {
    // alert(paperino)
})


addizione('ciao', ' a tutti', function (concatenazione) {
    console.log(concatenazione);
})

addizione('ciao', 6, function (concatenazione) {
    console.log(concatenazione);
})

addizione(10, 'ciao', function (concatenazione) {
    console.log(concatenazione);
})

window.addEventListener('load', function() {
    addizione(10, 20, function(somma) {
        document.querySelector('body').innerHTML = `<h1>${somma}</h1>`
    })
})
