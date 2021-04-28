
// variabile globale
let saluta = 'ciao a tutti';

function miaFunzione() {

    // variabile locale nella function miaFunzione
    let x = 10;
    console.log('hello world!')

    /* 
    all'interno dello scope locale della funzione
    posso accedere alle variabili e alle funzioni
    dichiarate nello scope globale
    */
    console.log(saluta);

    miaFunzione2();
}




function miaFunzione2() {
    console.log('ciao mondo!')
}

// console.log(x)