
/* 
una funzione può accettare degli argomenti
che poi, potranno essere utilizzati all'interno
del corpo della funzione
*/
function test(arg1, arg2, arg3) {
    let addizione = arg1 + arg2;

    let sottrazione = addizione - arg3;

    console.log(sottrazione);
}


test(10, 20, 5);