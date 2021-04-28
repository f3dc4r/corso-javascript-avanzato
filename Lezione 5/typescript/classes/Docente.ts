import { Persona } from './Persona';

export class Docente extends Persona {
    materie: Array<string>;
    constructor(nome: string, eta: number, materie: Array<string>) {
        super(nome, eta);
        this.materie = materie || [];
    }
}