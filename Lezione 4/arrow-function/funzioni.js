
// test(); // hello world!





// function declaration
// hoisting
function test(a, b) {
    console.log('hello world!')
}



// saluta(); // error



// function expression
// no hoisting
let saluta = function(a, b) {
    console.log('ciao a tutti')
}

// saluta();





/** le arrow function */
// no hoisting
// arrow() // error
let arrow = () => {
    console.log('sono una arrow function')
    // alert('ciaooooo')
}

// arrow()


// return implicito, quando scriviamo una funzione con una sola istruzione omettendo le parentesi graffe
let addizione = (a, b) => a+b;


// avendo un solo argomento possiamo omettere anche le parentesi tonde, che solitamente racchiudono gli argomenti
let quadrato = a => a*a





// esempi di applicazione delle arrow function

let numeri = [3,6,8,22,55,123];

// filter ritorna un nuovo array, composto dagli elementi che rispettano i criteri di filtraggio della funzione di callback
// filter accetta come argomento una funzione di callback, che deve ritornare true o false
// quando ritorna true, l'elemento valutato, viene inserito nel nuovo array
// quando ritorna false, l'elemento valutato, viene scartato
let numeriPari = numeri.filter((element) => {
    if (element%2 === 0) {
        return true
    } else {
        return false
    }
})

// console.log(numeriPari)

// arrow function con una sola istruzione, è possibile scriverla su una sola riga
// quando l'arrow function ha un solo argomento possiamo omettere le parentesi tonde
let numeriDispari = numeri.filter(element => element%2 !== 0)

// console.log(numeriDispari)

let parole = ['ciao', 'arrivederci', 'buongiorno']


// il metodo map degli array ci permette di creare un nuovo array, manipolando gli elementi contenuti nell'array originale
// in che modo? passando una funzione di callback, che applica le manipolazioni desiderate, su ogni elemento
let maiuscoleConPiu4Caratteri = parole.map((element) => {
    // controllo se la stringa è più lunga di 4 caratteri
    if (element.length <= 4) {
        // ritorno la stringa con i caratteri convertiti in maiuscolo
        return element.toUpperCase();
    } else {
        // ritorno la stringa invariata
        return element
    }
})

// console.log(maiuscoleConPiu4Caratteri)




// map
let quadrati = numeri.map(element => element*element);

// console.log('originale', numeri)
// console.log('quadrati',quadrati)



// forEach
numeri.forEach(element => console.log(element))







