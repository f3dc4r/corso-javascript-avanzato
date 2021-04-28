
// il this nello scope globale corrisponde all'oggetto window
console.log(this);


let persona = {
    nome: 'Ryan',
    saluta: function() {
        /* 
        il "this", posizionato all'interno di un oggetto,
        corrisponde all'oggetto stesso 
        */
        console.log(`ciao a tutti sono ${this.nome}`)
    }
}

/*
possiamo riassegnare il valore delle proprietà, 
come per delle normali variabili 
*/
persona.nome = 'Giovanni'

persona.saluta();