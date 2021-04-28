// classe padre o superclasse
class FormaGeometrica {
    constructor(altezza, base) {
        this.altezza = altezza;
        this.base = base;
    }


    calcolaArea() {
        return this.altezza * this.base;
    }
}

// classe figlia che estende FormaGeometrica
class Cerchio extends FormaGeometrica {
    constructor(altezza, base, raggio) {
        super(altezza, base);
        this.raggio = raggio;
    }


    calcolaArea() {
        // Math oggetto che ci mette a disposizione javascript, che ha proprietà e metodi che ci 
        // aiutano per esempio in operazioni numeriche
        return this.raggio*this.raggio * Math.PI;
    }

}

// altra classe figlia che estende FormaGeometrica
class Triangolo extends FormaGeometrica {
    constructor(altezza, base) {
        super(altezza, base);
    }


    // nella classe figlia Triangolo abbiamo dato una diversa implementazione del metodo calcolaArea
    calcolaArea() {

        return (this.base * this.altezza) / 2; 
    }
}