import { Persona} from './classes/Persona';
import { Docente } from './classes/Docente';

/* 
dichiarando una variabile, possiamo opzionalmente dichiarare
anche il suo tipo
*/
let ilMioNumero: number = 32;


let laMiaStringa: string = 'hello world';
let doppiApici: string = "ciao a tutti";
let backtick: string = `sono una stringa anche io`;

let ilMioBoolean: boolean = false;
ilMioBoolean = true;


// console.log(ilMioNumero);

let p1 = new Persona('Ryan', 24);

console.log(p1)


let giovanni = new Docente('Giovanni', 30, ['html', 'css', 'javascript']);


let antonio = new Docente('Antonio', 30, ['javascript'])
// iMieiDocenti contiene un array contenente oggetti di tipo Docente;
let iMieiDocenti: Array<Docente> = [giovanni, antonio]

console.log(iMieiDocenti);
let docenti: Docente[] = []