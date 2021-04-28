// abbiamo dichiarato un classe nel file Persona.js e l'abbiamo esportato
// l'abbiamo reso disponibile all'esterno del file
// con la parola chiave export 
// quindi importabile con la parola chiave import
export class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
}