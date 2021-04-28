
// le variabili dichiarate nello scope globale, diventano proprietà dell'oggetto window
var persona = {
    nome: 'Ryan',
    cognome: 'Burgos',
    eta: 24,
    skills: ['Javascript', 'Angular', 'Python'],
    anagrafica: {
        indirizzo: 'via roma',
        dataDiNascita: '17-12-1990'
    },
    saluta: function() {
        return `Ciao a tutti sono ${this.nome} ${this.cognome} e ho ${this.eta} anni`
    }
}



// le funzioni dichiarate nello scope globale, diventano metodi dell'oggetto window
function test() {
    console.log('test')
}

// this nello scope globale corrisponde all'oggetto window
// console.log(this)
// console.log(window.persona)

// window.test();

// test()


//ogni tab del browser ha un suo oggetto window
// window.addEventListener('load', function() {})


// notazione con il punto per accedere alle proprietà dell'oggetto
// console.log(persona.nome) 

// notazione con le parentesi quadre per accedere alle proprietà dell'oggetto
// console.log(persona['cognome']) 

var s = persona.saluta();

// console.log(s);