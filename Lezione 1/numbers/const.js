// scope globale
const x = 10;


function test() {
    // scope locale della funzione test
    const x = 2;
    console.log(`sono all'interno della funzione`, x);
}

test();

console.log(`sono una costante nello scope globale`,x)