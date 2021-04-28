export interface Dati {
    nome: string;
    eta: number;
    cognome?: string; // con il punto interrogativo dichiaro il campo opzionale
}

function stampaDati(a: Dati) {
    console.log(`il mio nome è ${a.nome} e ho ${a.eta} anni`);
}


stampaDati({ nome: 'Ryan', eta: 24});


let prova: Dati;



prova = {
    nome: 'giovanni',
    eta: 30
}