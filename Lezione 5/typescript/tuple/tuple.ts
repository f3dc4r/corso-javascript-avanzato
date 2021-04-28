/*
ho dichiarato la mia tupla, che necessariamente
deve avere come primo elemento una stringa
e come secondo elemento un numero
*/
let laMiaTupla: [string, number] = ['ciao', 21];

let laMiaSecondaTupla: [boolean, boolean] = [true, true]


let tupla: [string, boolean, number, string] = ['ciao', false, 12, 'test']


/*
ho dichiarato leMieCoordinate come array di tuple,
quindi avrò un array di array/tuple
*/
let leMieCoordinate: Array<[string, number]>;

leMieCoordinate = [['x', 2], ['y', 3], ['x', 10]]


console.log(leMieCoordinate)

