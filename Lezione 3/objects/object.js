//parentesi graffa (ctrl + alt + maiusc + è)

//backtick ` ALT + 96(dal tastierino numerico)

let persona = {
    nome: 'Ryan', // proprietà dell'oggetto
    saluta: function () { // metodo dell'oggetto
        return `ciao a tutti sono ${this.nome}` // this corrisponde in questo caso all'oggetto che lo contiene
    },
    altezza: 170
}


// console.log(persona.nome)

// console.log(persona.saluta())


// definiamo la classe Persona/ tipo Persona
class Persona {
    // il metodo constructor è il metodo che viene invocato all'istanza della classe
    // utilizzato per inizializzare i campi/prorietà dell'oggetto che stiamo istanziando
    constructor(nome, cognome, altezza, eta) { 

        /* 
        il this rappresenta l'oggetto che lo contiene
         */
        this.nome = nome;
        this.cognome = cognome;
        this.altezza = altezza;
        this.eta = eta;
    }
}


// con la parola chiave new seguita dal nome della classe
// andiamo a istanziare un nuovo oggetto di tipo Persona
let p1 = new Persona('Ryan', 'Burgos', 170, 24);
let p2 = new Persona('Giovanni', 'Giannasca', 180, 30);
let p3 = new Persona('Giovanni', 'Giannasca', 180, 30);


console.log(p2 === p3);



console.log(p1);