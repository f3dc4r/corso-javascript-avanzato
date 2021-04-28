


// new Car('ford', 'fiesta', 2010); // error

// classe Car
class Car {
    // è il metodo che viene invocato all'istanza della classe
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        console.log("l'istanza della macchina è stata creata")
    }
}

// la parola chiave new seguita dal nome della classe
// ci permette di istanziare un nuovo oggetto
// di tipo Car
// let ford = new Car('Ford', 'Fiesta', 2016);

// console.log(ford);

let listaAuto = [];

window.addEventListener('load', function() {
    // selezionato la form tramite id
    document.querySelector('#insertCar')
    // abbiamo gestito l'evento submit con addEventListener
    .addEventListener('submit', function(event) {
        event.preventDefault(); /* abbiamo prevenuto il comportamento di default 
        dell'evento submit che comporta un refresh della pagina*/


        // abbiamo assegnato il valore scritto all'interno degli input alle seguente variabili
        let brand = document.querySelector('#brand').value;
        let model = document.querySelector('#model').value;
        let year = document.querySelector('#year').value; 

        // controlliamo che i campi di input siano popolati
        if (brand == '' || brand == undefined) {
            alert('inserisci il nome del brand');
            return; // ferma l'esecuzione del codice
        }

        if (model == '' || model == undefined) {
            alert('inserisci il nome del modello');
            return;
        }

        if (year == '' || year == undefined) {
            alert("inserisci l'anno dell'auto");
            return;
        }


        // abbiamo istanziato un nuovo oggetto con la classe Car
        // passandogli come parametri
        // i valori ricavati tramite input
        let newCar = new Car(brand, model, parseInt(year));

        // push ci permette di aggiungere alla fine dell'array un nuovo elemento
        listaAuto.push(newCar);


        // dichiariamo un variabile con stringa vuota che conterrà il contenuto del tbody
        let tbodyContent = '';


        // nel ciclo for, creo dinamicamente il corpo del tbody
        // concatenando nuovi tr per ogni elemento presente nell'array listaAuto
        for (let car of listaAuto) {
            tbodyContent += `
            <tr>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
            </tr>
            
            `
        }

        // assegno il tbodyContent all'innerHTML del mio tbody
        document.querySelector('#listOfCars').innerHTML = tbodyContent;


    })
})