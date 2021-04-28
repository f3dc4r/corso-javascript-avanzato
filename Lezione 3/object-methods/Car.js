
// le classi ci permettono di istanziare oggetti dello stesso tipo
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isMoving = false;

        // this.start();
    }


    start() {
        if (this.isMoving) {
            console.log('hey la macchina si sta già muovendo')
        } else {
            this.isMoving = true;
            console.log('ora la macchina si sta muovendo');
        }
        
    }

    stop() {
        if (!this.isMoving) {
            console.log('la macchina è già ferma')
        } else {
            this.isMoving = false;
            console.log('la macchina si è fermata');
        }
    }
}

let porsche = new Car('Porsche', 'Macan', 2020);

let ford = new Car('Ford', 'Fiesta', 2016);


console.log(porsche)
console.log(ford)

// console.log('prima di start', porsche)

// porsche.start();


// console.log('dopo lo start', porsche)

// porsche.stop();
// porsche.stop();

// console.log(porsche)


