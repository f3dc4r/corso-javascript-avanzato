// var x = 4;

// if (true) {
//     var x = 8;
// }

// console.log(x);

// let x = 4;

// if (true) {
//     /* 
//     let gode del blocked-scope,
//     quindi limita la visibilità della variabile
//     solo in questo blocco di codice
//     */
//     let x = 8;
// }

// console.log(x);



// for (var x = 0; x < 4; x++) {
//     var y = x;
// }

// console.log(x);
// console.log(y)



for (let x = 0; x < 4; x++) {
    /* 
     le variabili x e y sono visibili solo in questo 
     blocco di codice, perché let gode del blocked-scope
     */
    let y = x;
}

console.log(x);
console.log(y)



