window.addEventListener('load', function() {

    // con addEventListener sull'elemento button con id clicca abbiamo gestito l'evento click
    document.querySelector('#clicca').addEventListener('click', function() {

        /* alla variabile inputValue stiamo assegnando il valore
         che l'utente ha inserito nel campo di input*/
        let inputValue = document.querySelector('#nome').value;
        

        /*
        alla variabile arrayParole, abbiamo assegnato un array ricavato dal metodo split
        applicato sulla stringa inputValue
        lo split divide le parole in elementi dell'array secondo il carattere che gli passiamo 
        come parametro
        es.
        let parola = 'ciao a tutti';
        parola.split(' ') tornerà l'array ['ciao', 'a', 'tutti']

        parola.split('') tornerà ['c', 'i', 'a' ......]
        */
        let arrayParole = inputValue.split(' ');


        // for(let i = 0; i < arrayParole.length; i++) {
        //     console.log(arrayParole[i]);
        // }

        // abbiamo creato un array di appoggio per pushare le stringhe manipolate
        let res = [];

        /* con il for..of abbiamo ciclato l'arrayParole ottenuto precedentemente dalla split */
        for (let parola of arrayParole) {
            // abbiamo splittato la singola parola di nuovo in un array
            let par = parola.split('');
            /* 
            abbiamo convertito il primo elemento dell'array in maiuscolo con il metodo toUpperCase,
            abbiamo inoltre riassegnato il valore al primo elemento dell'array
            */
            par[0] = par[0].toUpperCase();

            /**
             con il metodo join degli array, abbiamo unito tutti gli elementi dell'array in una stringa
             e l'abbiamo assegnata alla variabile parMaiuscola
             */
            let parMaiuscola = par.join('');

            /* abbiamo aggiunto/pushato la nostra parola manipolata nell'array res */
            res.push(parMaiuscola);
        } // fine ciclo for

        /**
         abbiamo unito gli elementi dell'array tramite il metodo join 
         in una stringa unita dal carattere ' ' passato in input ad esso
         */
        let risultatoFinale = res.join(' ');


        // abbiamo creato l'elemento p
        let p = document.createElement('p');

        // abbiamo assegnato al textContent il valore di risultatoFinale
        p.textContent = risultatoFinale;

        // in fine abbiamo appeso l'elemento p al body
        document.querySelector('body').appendChild(p);
    })


})