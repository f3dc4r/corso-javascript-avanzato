/*
per tipizzare gli array abbiamo due sintassi
- la prima è : tipo[]
- la seconda è : Array<tipo>
*/

let myArray: number[]; // abbiamo dichiarato un array di number

myArray = [1,2,3,4]

let array = [1, 'ciao', true]


// abbiamo dichiarato un array di stringhe
let leMieStringhe: Array<string> = ['ciao', 'buongiorno'];


// le variabili se pur tipizzate, quando non gli assegniamo nessun valore
// esse rimangono undefined
let iMieiBoolean: Array<boolean>;

console.log(iMieiBoolean);

