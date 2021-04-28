// tramite import abbiamo importato la class Persona dal file Persona.js
// import {Persona} from './classes/Persona.js';

import { Presidente } from './classes/Presidente.js';
import {Docente} from './classes/Docente.js';

import {addizione} from './functions/addizione.js';


console.log(addizione(3, 5))


//quindi siamo stati in grado di istanziare la classe dichiarata in un file esterno
// const p1 = new Persona('Mario', 'Rossi');


const conte = new Presidente('Giuseppe', 'Conte');

conte.emanaDPCM();

// console.log(p1)