
// classe padre o superclasse Persona
class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
}

// classe figlia
// tramite la parola chiave extends, estendiamo la superclasse Persona
class Docente extends Persona {
    // il costruttore è il metodo che viene eseguito all'istanza della classe
    constructor(nome, cognome, materie) {
        /*
        ATTENZIONE: eseguire il super prima di ogni altra istruzione per evitare errori
        tramite super accediamo al costruttore della classe padre
        e inizializziamo le sue proprietà
        */
        super(nome, cognome);
        /* 
        se materie viene passato nel costruttore
        il valore di this.materie sarà quello passato nel costruttore
        altrimenti verrà inizializzato ad array vuoto []
        */
       this.materie = materie || []; 
        
    }
}


class Test {
    constructor() {}
}

// istanza della classe Docente
let ryan = new Docente('Ryan', 'Burgos', ['Javascript', 'jQuery']);


ryan.nome;
ryan.cognome;
ryan.materie;


// stiamo controllando che l'oggetto assegnato 
// alla variabile ryan sia istanza della classe docente
console.log(ryan instanceof Object); // true
console.log(ryan instanceof Persona); // true
console.log(ryan instanceof Docente); // true
// instanceof ci permette di controllare se l'oggetto valutato 
// è istanza della classe passata a sinistra dell'istruzione












