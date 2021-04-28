import {Persona} from './Persona.js';


export class Presidente extends Persona {
    constructor(nome, cognome) {
        super(nome, cognome);
    }

    emanaDPCM() {
        console.log('ciaoo rimarrete tutti a casa per natale')
    }
}