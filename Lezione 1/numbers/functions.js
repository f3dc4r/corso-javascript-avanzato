
// con addEventListener abbiamo gestito l'event load di window
window.addEventListener('load', function() {
    /* 
    abbiamo selezionato con l'oggetto document e il suo metodo querySelector
    il button e abbiamo assegnato alla proprietà onclick del nodo html selezionato(in questo caso il button)
    la funzione che gestirà l'evento click
    */
    document.querySelector('button').onclick = function () {
        /* 
        tramite il metodo createElement dell'oggetto document
        abbiamo creato un nuovo tag p
        */
        let p = document.createElement('p');
        /* abbiamo assegnato alla proprietà textContent del tag p il valore 'hello world!' */
        p.textContent = 'hello world!';

        /*tramite appendChild, abbiamo appeso il nuovo elemento p al body */
        document.querySelector('body').appendChild(p);
    }
})



