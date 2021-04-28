let numeri = [3,6,8,22,55,123];
let parole = ['ciao', 'arrivederci', 'buongiorno']


window.addEventListener('load', () => {
    document.querySelector('#clicca').addEventListener('click', () => {
        alert('hello world!')
    })
})



let elMinori55 = numeri.filter(function(element) {
    return element < 55;
})

let numMaggiriDi10 = numeri.filter((element) => element > 10)

// console.log('> 10', numMaggiriDi10)
// console.log('originale', numeri)
// console.log('filtrato', elMinori55);


let maiusc = parole.map(function(element) {
    return element.toUpperCase();
})

// l'arrow function passata come callback al metodo map dell'array parole
// è stato scritto su un riga sola
// omettendo le parentesi tonde, perché abbiamo un solo argomento
// scrivendo la funzione su una sola riga e omettendo anche le parentesi graffe
// abbiamo il return implicito
let maiuscConArrow = parole.map(element => element.toUpperCase());

console.log('funzione tradizionale', maiusc);

console.log('arrow', maiuscConArrow)