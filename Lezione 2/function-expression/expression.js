// test(); // error

/*
Le function expression, cioè funzioni assegnate come valore alle variabili,
non possono essere eseguite prima dell'effettiva assegnazione,
quindi non godono dell'hoisting
*/
let test = function() {
    console.log('hello world');
}

test(); // hello world









// let x = 5;
// const y = 40;
// var z = 2

// // if (true) {
// //     let x = 10;
// //     const y = 20;
// //     var z = 4;
// // }

// var z = 4;

// // function test() {
// //     let x = 10;
// //     const y = 20;
// //     var z = 4;
// // }

// console.log(x) // 5
// console.log(y) // 40
// console.log(z) // 4

 