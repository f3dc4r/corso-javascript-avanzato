import { Dati } from '../interface/interface'


export class Persona implements Dati {
    nome: string;
    eta: number;

    constructor(nome: string, eta: number) {

        this.nome = nome;
        this.eta = eta;
    }
}

