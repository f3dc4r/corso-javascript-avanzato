window.addEventListener('load', function() {

    // con addEventListener sull'elemento button con id clicca abbiamo gestito l'evento click
    document.querySelector('#clicca').addEventListener('click', function() {

        let inputValue = document.querySelector('#nome').value;
        let arrayParole = inputValue.split(' ');

        let p = document.createElement('p');

        p.textContent = primaLetteraMaiusc(arrayParole);

        document.querySelector('body').appendChild(p);
    })
})


function primaLetteraMaiusc(array) {
    let res = [];

    for (let parola of array) {
   
        let par = parola.split('');

        par[0] = par[0].toUpperCase();

        let parMaiuscola = par.join('');

   
        res.push(parMaiuscola);
    } 
    return res.join(' ');
}

// le funzioni di default ritornano undefined
function test() {}

console.log(test())